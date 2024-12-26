import { useState, forwardRef, useEffect } from "react";

const LoadingVideo = forwardRef(
  ({ className, onLoadedData, src, onError, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [errorDetails, setErrorDetails] = useState(null);

    useEffect(() => {
      const video = ref.current;
      if (!video) return;

      const handleCanPlay = () => {
        console.log("Video can play:", src);
        setIsLoading(false);
        onLoadedData?.();
        // Attempt to play only after canplay event
        video.play().catch((error) => {
          console.error("Video play error for src:", src, error);
          setErrorDetails(`Play error: ${error.message}`);
          setHasError(true);
          onError?.(error);
        });
      };

      const handleError = (error) => {
        const videoError = video.error;
        const errorMessage = videoError
          ? `Code: ${videoError.code}, Message: ${videoError.message}`
          : "Unknown error";

        console.error("Video loading error for src:", src, errorMessage);
        setErrorDetails(errorMessage);
        setHasError(true);
        setIsLoading(false);
        onError?.(error);
      };

      const handleLoadStart = () => {
        console.log("Video load started:", src);
        setIsLoading(true);
        setHasError(false);
        setErrorDetails(null);
      };

      // Add event listeners
      video.addEventListener("loadstart", handleLoadStart);
      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("error", handleError);

      // Set source if provided
      if (src) {
        console.log("Setting video source:", src);
        video.src = src;
        video.load();
      }

      // Cleanup
      return () => {
        video.removeEventListener("loadstart", handleLoadStart);
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleError);
      };
    }, [ref, src, onLoadedData, onError]);

    const handleRetry = () => {
      if (ref.current) {
        console.log("Retrying video load:", src);
        setIsLoading(true);
        setHasError(false);
        ref.current.load();
      }
    };

    return (
      <div className="relative w-full h-full">
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
            ref={ref}
            src={src} // This was missing before
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
