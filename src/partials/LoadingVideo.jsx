import { useState, forwardRef, useEffect } from "react";

const LoadingVideo = forwardRef(
  ({ className, onLoadedData, src, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
      const video = ref.current;
      if (!video) return;

      const handleCanPlay = () => {
        setIsLoading(false);
        onLoadedData?.();
        // Attempt to play only after canplay event
        video.play().catch((error) => {
          console.error("Video play error:", error);
          setHasError(true);
        });
      };

      const handleError = (error) => {
        console.error("Video loading error:", error);
        setHasError(true);
        setIsLoading(false);
      };

      // Add event listeners
      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("error", handleError);

      // Set source if provided
      if (src) {
        video.src = src;
        video.load();
      }

      // Cleanup
      return () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleError);
      };
    }, [ref, src, onLoadedData]);

    return (
      <div className="relative w-full h-full">
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center  backdrop-blur-sm">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/10">
            <p className="text-red-500">Failed to load video</p>
          </div>
        ) : (
          <video
            ref={ref}
            className={`${className} ${
              isLoading ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
            {...props}
          />
        )}
      </div>
    );
  }
);

LoadingVideo.displayName = "LoadingVideo";

export default LoadingVideo;
