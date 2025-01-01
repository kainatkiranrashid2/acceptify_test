import {
  useState,
  forwardRef,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";

const LoadingPancakeVideo = forwardRef(
  ({ className, onLoadedData, src, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [videoElement, setVideoElement] = useState(null);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef(null);

    // Memoize observer options
    const observerOptions = useMemo(
      () => ({
        root: null,
        rootMargin: "100%",
        threshold: 0.1,
      }),
      []
    );

    // Memoize event handlers
    const handleCanPlay = useCallback(() => {
      setIsLoading(false);
      onLoadedData?.();
      videoElement?.play().catch((error) => {
        console.error("Video play error:", error);
        setHasError(true);
      });
    }, [videoElement, onLoadedData]);

    const handleError = useCallback((error) => {
      console.error("Video loading error:", error);
      setHasError(true);
      setIsLoading(true);
    }, []);

    // Memoize class string
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
      if (!videoElement || !isInView) return;

      // Add event listeners
      videoElement.addEventListener("canplay", handleCanPlay);
      videoElement.addEventListener("error", handleError);

      // Only set source if video is in view
      if (src && isInView) {
        videoElement.src = src;
        videoElement.load();
      }

      return () => {
        videoElement.removeEventListener("canplay", handleCanPlay);
        videoElement.removeEventListener("error", handleError);
      };
    }, [videoElement, src, isInView, handleCanPlay, handleError]);

    const setVideoRef = useCallback(
      (el) => {
        if (typeof ref === "function") {
          ref(el);
        } else if (ref) {
          ref.current = el;
        }
        setVideoElement(el);
      },
      [ref]
    );

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
            ref={setVideoRef}
            preload="metadata"
            className={videoClassName}
            {...props}
          />
        )}
      </div>
    );
  }
);

LoadingPancakeVideo.displayName = "LoadingPancakeVideo";

export default LoadingPancakeVideo;
