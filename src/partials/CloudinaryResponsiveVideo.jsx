import React, {
  useState,
  forwardRef,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { supportsHEVCAlpha } from "../CheckBrowserCapability";

const CloudinaryResponsiveVideo = forwardRef(
  (
    { hevcVideo, hevcMobile, webMVideo, className, onLoadedData, ...props },
    ref
  ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [errorDetails, setErrorDetails] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");
    const [isInView, setIsInView] = useState(false);
    const [hevc, setHevc] = useState(null);

    const videoRef = useRef(null);
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

    // Memoize the transform URL function
    const getTransformedUrl = useCallback((url) => {
      if (!url) return "";

      const isMobile = window.innerWidth <= 768;
      const baseUrl = url.split("/upload/")[0] + "/upload/";
      const videoPath = url.split("/upload/")[1];

      let finalTransformation = "";
      if (!url.includes("hevc")) {
        finalTransformation = isMobile
          ? "c_limit,w_420,vc_vp9,q_auto/"
          : "c_limit,w_960,vc_vp9,q_auto/";
      }

     return `${baseUrl}${finalTransformation}${videoPath}`;

      
    }, []);

    // Memoize video class names
    const videoClassName = useMemo(() => {
      return `${className} ${
        isLoading ? "opacity-0" : "opacity-100"
      } transition-opacity duration-300`;
    }, [className, isLoading]);

    // Memoize video style
    const videoStyle = useMemo(
      () => ({
        backgroundColor: "transparent",
      }),
      []
    );

    // Memoize ref setter
    const setRefs = useCallback(
      (element) => {
        videoRef.current = element;
        if (typeof ref === "function") {
          ref(element);
        } else if (ref) {
          ref.current = element;
        }
      },
      [ref]
    );

    // Memoize event handlers
    const handleLoadedData = useCallback(() => {
      console.log("Video loaded successfully:", videoSrc);
      setIsLoading(false);
      onLoadedData?.();
    }, [videoSrc, onLoadedData]);

    const handleError = useCallback((e) => {
      console.error("Video error details:", {
        error: e.currentTarget.error,
        networkState: e.currentTarget.networkState,
        readyState: e.currentTarget.readyState
      });
      setHasError(true);
      setErrorDetails(e.currentTarget.error?.message || "Unknown error");
      setIsLoading(false);
    }, []);

    const handleRetry = useCallback(() => {
      if (videoRef.current) {
        console.log("Retrying video load:", videoSrc);
        setIsLoading(true);
        setHasError(false);
        videoRef.current.load();
      }
    }, [videoSrc]);

    useEffect(() => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      }
    }, [window.innerWidth]);

    useEffect(() => {
      setHevc(supportsHEVCAlpha());
    }, []);

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
      if (isInView) {
        const source = hevc
          ? isMobile
            ? getTransformedUrl(hevcMobile)
            : getTransformedUrl(hevcVideo)
          : getTransformedUrl(webMVideo);
        setVideoSrc(source);
      }
    }, [
      hevc,
      isMobile,
      hevcMobile,
      hevcVideo,
      webMVideo,
      isInView,
      getTransformedUrl,
    ]);

    useEffect(() => {
      if (videoSrc) {
        setIsLoading(true);
        setHasError(false);
        setErrorDetails(null);
      }
    }, [videoSrc]);

    return (
      <div ref={containerRef} className="relative w-full h-full">
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100/10 p-4">
            <p className="text-red-500 mb-2">Failed to load video</p>
            <p className="text-sm text-gray-500 mb-4">{errorDetails}</p>
            <button
              onClick={handleRetry}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">
              Retry
            </button>
          </div>
        ) : (
          <video
            ref={setRefs}
            key={videoSrc}
            src={isInView ? videoSrc : undefined}
            preload="metadata"
            className={videoClassName}
            onLoadedData={handleLoadedData}
            onError={handleError}
            {...props}
            playsInline
            style={videoStyle}
          />
        )}
      </div>
    );
  }
);

CloudinaryResponsiveVideo.displayName = "CloudinaryResponsiveVideo";

export default CloudinaryResponsiveVideo;
