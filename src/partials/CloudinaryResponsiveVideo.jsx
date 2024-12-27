import React, { useState, forwardRef, useEffect } from "react";

const CloudinaryResponsiveVideo = forwardRef(
  (
    {
      hevcVideo,
      webMVideo,
      className,
      onLoadedData,
      isHEVCSupported,
      transformationType = "optimized", // New prop

      ...props
    },
    ref
  ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [errorDetails, setErrorDetails] = useState(null);
    console.log("hevcVideo");
    console.log(hevcVideo);

    // Get the correct video URL based on device width
    const getTransformedUrl = (url) => {
      if (!url) return "";

      const isMobile = window.innerWidth <= 768;
      const baseUrl = url.split("/upload/")[0] + "/upload/";
      const videoPath = url.split("/upload/")[1];

      // Different transformation presets
      const transformations = {
        optimized: isMobile
          ? "f_auto,c_limit,w_480,vc_auto,q_auto:best/"
          : "f_auto,c_limit,w_960,vc_auto,q_auto:best/",

        resized: isMobile
          ? "f_auto,c_scale,w_480,h_270,vc_auto,q_auto:best/"
          : "f_auto,c_scale,w_960,h_540,vc_auto,q_auto:best/",

        compressed: isMobile
          ? "f_auto,c_limit,w_480,vc_auto,q_auto,br_2m/"
          : "f_auto,c_limit,w_960,vc_auto,q_auto,br_4m/",
      };

      // Choose transformation based on video format and device
      let finalTransformation = "";
      console.log("-----------------", url, "rrrr");
      if (url.includes("hevc")) {
        // HEVC specific transformations
        finalTransformation = isMobile
          ? "f_mp4,c_limit,w_420,vc_h265,q_auto:best,br_2m,b_auto/"
          : "f_mp4,c_limit,w_960,vc_h265,q_auto:best,br_4m,b_auto/";
      } else {
        // WebM specific transformations
        finalTransformation = isMobile
          ? "c_limit,w_420,vc_vp9,q_auto:best,br_2m/"
          : "c_limit,w_960,vc_vp9,q_auto:best,br_4m/";
      }

      return `${baseUrl}${finalTransformation}${videoPath}`;
    };

    // Get the appropriate video source
    console.log("iram appi");
    console.log(isHEVCSupported);
    console.log(isHEVCSupported);
    const videoSrc = isHEVCSupported
      ? getTransformedUrl(hevcVideo, transformationType)
      : getTransformedUrl(webMVideo, transformationType);

    console.log("videoSrc");
    console.log(videoSrc);

    const handleRetry = () => {
      if (ref?.current) {
        console.log("Retrying video load:", videoSrc);
        setIsLoading(true);
        setHasError(false);
        ref.current.load();
      }
    };

    useEffect(() => {
      // Reset states when video source changes
      setIsLoading(true);
      setHasError(false);
      setErrorDetails(null);
    }, [videoSrc]);

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
            src={videoSrc}
            className={`${className} ${
              isLoading ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
            onLoadedData={() => {
              console.log("Video loaded successfully:", videoSrc);
              setIsLoading(false);
              onLoadedData?.();
            }}
            onError={(e) => {
              console.error("Video error:", e);
              setHasError(true);
              setErrorDetails(
                e.currentTarget.error?.message || "Unknown error"
              );
              setIsLoading(false);
            }}
            {...props}
          />
        )}
      </div>
    );
  }
);

CloudinaryResponsiveVideo.displayName = "CloudinaryResponsiveVideo";

export default CloudinaryResponsiveVideo;
