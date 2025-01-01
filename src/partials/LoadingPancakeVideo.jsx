import {
  useState,
  forwardRef,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  memo,
} from "react";

const LoadingPancakeVideo = memo(
  forwardRef(({ className, onLoadedData, index, src, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const prevSrcRef = useRef(src);

    const observerOptions = useMemo(
      () => ({
        root: null,
        rootMargin: "100%",
        threshold: 0.1,
      }),
      []
    );

    const handleCanPlay = useCallback(() => {
      setIsLoading(false);
      onLoadedData?.();
      videoRef.current?.play().catch(console.error);
    }, []); // Removed onLoadedData dependency

    const handleError = useCallback(() => {
      setHasError(true);
      setIsLoading(true);
    }, []);

    const videoClassName = useMemo(() => {
      return `${className} !top-1/2 ${
        isLoading ? "opacity-0" : "opacity-100"
      } transition-opacity duration-300`;
    }, [className, isLoading]);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      }, observerOptions);

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, [observerOptions]);

    useEffect(() => {
      if (prevSrcRef.current !== src) {
        setIsLoading(true);
        setHasError(false);
        prevSrcRef.current = src;
      }
    }, [src]);

    useEffect(() => {
      const video = videoRef.current;
      if (!video || !isInView) return;

      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("error", handleError);

      if (src && isInView) {
        video.src = src;
        video.load();
      }

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleError);
      };
    }, [src, isInView, handleCanPlay, handleError]);

    useEffect(() => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(videoRef.current);
      } else {
        ref.current = videoRef.current;
      }
    }, [ref]);

    return (
      <div ref={containerRef} className="relative w-full h-full">
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/10">
            <p className="text-red-500">Failed to load video</p>
          </div>
        ) : (
          <video
            ref={videoRef}
            preload="metadata"
            className={videoClassName}
            onLoadedData={onLoadedData}
            onContextMenu={(e) => e.preventDefault()}
            {...props}
          />
        )}
      </div>
    );
  })
);

LoadingPancakeVideo.displayName = "LoadingPancakeVideo";

export default LoadingPancakeVideo;
