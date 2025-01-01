import React, { useState, forwardRef, useEffect, useRef } from "react";
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

    // Combine the forwarded ref with our local ref
    const setRefs = (element) => {
      videoRef.current = element;
      if (typeof ref === "function") {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

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

      let finalTransformation = "";
      if (!url.includes("hevc")) {
        finalTransformation = isMobile
          ? "c_limit,w_420,vc_vp9,q_auto:best,br_2m/"
          : "c_limit,w_960,vc_vp9,q_auto:best,br_4m/";
      }

      return `${baseUrl}${finalTransformation}${videoPath}?v=${Date.now()}`;
    };

    // Set up Intersection Observer
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: "50px", // Start loading when video is 50px from viewport
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Once we've started loading, we can disconnect the observer
          }
        });
      }, options);

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, []);

    // Only load video when in view
    useEffect(() => {
      if (isInView) {
        const source = hevc
          ? isMobile
            ? getTransformedUrl(hevcMobile)
            : getTransformedUrl(hevcVideo)
          : getTransformedUrl(webMVideo);
        setVideoSrc(source);
      }
    }, [hevc, isMobile, hevcMobile, hevcVideo, webMVideo, isInView]);

    const handleRetry = () => {
      if (videoRef.current) {
        console.log("Retrying video load:", videoSrc);
        setIsLoading(true);
        setHasError(false);
        videoRef.current.load();
      }
    };

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
            playsInline
            style={{ backgroundColor: "transparent" }}
          />
        )}
      </div>
    );
  }
);

CloudinaryResponsiveVideo.displayName = "CloudinaryResponsiveVideo";

export default CloudinaryResponsiveVideo;
