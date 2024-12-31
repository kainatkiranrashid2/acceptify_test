import React, { useState, forwardRef, useEffect } from "react";
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

    const [hevc, setHevc] = useState(null);

    useEffect(() => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      }
    }, [window.innerWidth]);

    useEffect(() => {
      setHevc(supportsHEVCAlpha());
    }, []);
    // Get the correct video URL based on device width
    const getTransformedUrl = (url) => {
      if (!url) return "";

      const isMobile = window.innerWidth <= 768;
      const baseUrl = url.split("/upload/")[0] + "/upload/";
      const videoPath = url.split("/upload/")[1];

      // Choose transformation based on video format and device
      let finalTransformation = "";
      if (url.includes("hevc")) {
        console.log("hevcccc");
        console.log(url);
        // HEVC specific transformations
      } else {
        // WebM specific transformations
        finalTransformation = isMobile
          ? "c_limit,w_420,vc_vp9,q_auto:best,br_2m/"
          : "c_limit,w_960,vc_vp9,q_auto:best,br_4m/";
      }
      console.log("myfinaltesting");
      console.log(`${baseUrl}${finalTransformation}${videoPath}`);
      const fullUrl = `${baseUrl}${finalTransformation}${videoPath}?v=${Date.now()}`;

      return fullUrl;
    };
    const isMobileVideo = isMobile ? "mobile" : "desktop";
    console.log(isMobileVideo);
    useEffect(() => {
      const loadVideo = () => {
        const source = hevc
          ? isMobile
            ? getTransformedUrl(hevcMobile)
            : getTransformedUrl(hevcVideo)
          : getTransformedUrl(webMVideo);
        setVideoSrc(source);
      };

      loadVideo();
    }, [hevc, isMobile, hevcMobile, hevcVideo, webMVideo]); // Only runs when these dependencies change

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
            key={videoSrc} // Force re-render when src changes
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
            playsInline // Important for iOS
            style={{ backgroundColor: "transparent" }}
          />
        )}
      </div>
    );
  }
);

CloudinaryResponsiveVideo.displayName = "CloudinaryResponsiveVideo";

export default CloudinaryResponsiveVideo;
