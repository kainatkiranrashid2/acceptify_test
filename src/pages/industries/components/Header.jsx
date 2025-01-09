import React, { useEffect, useRef, useState } from "react";
import LoadingVideo from "../../../partials/LoadingVideo";

const Header = () => {
  const desktopPlayerRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  const [videoSrc, setVideoSrc] = useState(
    "https://res.cloudinary.com/dq5guzzge/video/upload/v1736446544/components/industries_page/hero_section.webm"
  );

  const handleLoadedData = () => {
    console.log("Video loaded successfully");
  };

  const handleError = () => {
    console.error("Video failed to load");
    setVideoError(true);
  };

  useEffect(() => {
    return () => {
      if (desktopPlayerRef.current) {
        desktopPlayerRef.current.pause();
        desktopPlayerRef.current.src = "";
      }
    };
  }, []);

  return (
    <section className="relative hidden md:block w-full h-screen">
      {/* Video Container */}
      <div className="absolute inset-0 w-full h-full">
        {videoSrc && !videoError && (
          <LoadingVideo
            className="hidden md:block w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            ref={desktopPlayerRef}
            loop
            muted
            controlsList="nodownload"
            disablePictureInPicture
            playsInline
            onLoadedData={handleLoadedData}
            onError={handleError}
            onContextMenu={(e) => e.preventDefault()}
          />
        )}
      </div>
    </section>
  );
};

export default Header;
