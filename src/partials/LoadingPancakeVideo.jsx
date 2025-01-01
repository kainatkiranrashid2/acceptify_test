import { useState, forwardRef, useEffect, useRef } from "react";

const LoadingPancakeVideo = forwardRef(
  ({ className, onLoadedData, src, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [videoElement, setVideoElement] = useState(null);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef(null);

    // Set up Intersection Observer
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: "200px", // Start loading when video is 50px from viewport
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Once we've started loading, we can disconnect
          }
        });
      }, options);

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!videoElement || !isInView) return;

      const handleCanPlay = () => {
        setIsLoading(false);
        onLoadedData?.();
        // Attempt to play only after canplay event
        videoElement.play().catch((error) => {
          console.error("Video play error:", error);
          setHasError(true);
        });
      };

      const handleError = (error) => {
        console.error("Video loading error:", error);
        setHasError(true);
        setIsLoading(true);
      };

      // Add event listeners
      videoElement.addEventListener("canplay", handleCanPlay);
      videoElement.addEventListener("error", handleError);

      // Only set source if video is in view
      if (src && isInView) {
        videoElement.src = src;
        videoElement.load();
      }

      // Cleanup
      return () => {
        videoElement.removeEventListener("canplay", handleCanPlay);
        videoElement.removeEventListener("error", handleError);
      };
    }, [videoElement, src, onLoadedData, isInView]);

    // Handle video element ref
    const setVideoRef = (el) => {
      if (typeof ref === "function") {
        ref(el);
      } else if (ref) {
        ref.current = el;
      }
      setVideoElement(el);
    };

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
            className={`${className} !top-1/2 ${
              isLoading ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
            {...props}
          />
        )}
      </div>
    );
  }
);

LoadingPancakeVideo.displayName = "LoadingPancakeVideo";

export default LoadingPancakeVideo;
