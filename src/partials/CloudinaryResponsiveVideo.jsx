import React, { useState, forwardRef, useEffect } from "react";
import { supportsHEVCAlpha } from "../CheckBrowserCapability";

const CloudinaryResponsiveVideo = forwardRef(
  ({ hevcVideo, webMVideo, className, onLoadedData, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [errorDetails, setErrorDetails] = useState(null);
    const [hevc, setHevc] = useState(null);

    useEffect(() => {
      const video = document.createElement("video");
      console.log(
        "HEVC/H.265 support:",
        video.canPlayType('video/mp4; codecs="hvc1"')
      );
      console.log(
        "VP9 support:",
        video.canPlayType('video/webm; codecs="vp9"')
      );
      console.log(
        "Is Safari:",
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      );
      console.log(
        "Is Mobile:",
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      );
    }, []);
    useEffect(() => {
      console.log(supportsHEVCAlpha());
      setHevc(supportsHEVCAlpha());
    }, []);
    // Get the correct video URL based on device width
    const getTransformedUrl = (url) => {
      if (!url) return "";

      const isMobile = window.innerWidth <= 768;
      const baseUrl = url.split("/upload/")[0] + "/upload/";
      const videoPath = url.split("/upload/")[1];

      // Different transformation presets
      // const transformations = {
      //   optimized: isMobile
      //     ? "f_auto,c_limit,w_480,vc_auto,q_auto:best/"
      //     : "f_auto,c_limit,w_960,vc_auto,q_auto:best/",

      //   resized: isMobile
      //     ? "f_auto,c_scale,w_480,h_270,vc_auto,q_auto:best/"
      //     : "f_auto,c_scale,w_960,h_540,vc_auto,q_auto:best/",

      //   compressed: isMobile
      //     ? "f_auto,c_limit,w_480,vc_auto,q_auto,br_2m/"
      //     : "f_auto,c_limit,w_960,vc_auto,q_auto,br_4m/",
      // };

      // Choose transformation based on video format and device
      let finalTransformation = "";
      if (url.includes("hevc")) {
        // HEVC specific transformations
        finalTransformation = isMobile
          ? "c_scale,w_420,vc_h265,b_transparent,q_auto:best/"
          : "c_scale,w_960,vc_h265,b_transparent,q_auto:best/";
      } else {
        // WebM specific transformations
        finalTransformation = isMobile
          ? "c_limit,w_420,vc_vp9,q_auto:best,br_2m/"
          : "c_limit,w_960,vc_vp9,q_auto:best,br_4m/";
      }
      console.log("myfinaltesting");
      console.log(`${baseUrl}${finalTransformation}${videoPath}`);
      return `${baseUrl}${finalTransformation}${videoPath}`;
    };

    console.log("value of hevcVideo2 is", hevc);
    const videoSrc = hevc
      ? getTransformedUrl(hevcVideo)
      : getTransformedUrl(webMVideo);
    const kainat = hevc
      ? "hevcVideo Should be played"
      : "webm Should be played";
    console.log(kainat);
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
              console.log("value of hevcVideo2 is", hevc);
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
