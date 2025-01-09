import { useEffect, useRef, useState } from "react";
import { supportsHEVCAlpha } from "../../../CheckBrowserCapability/index.js";
import LoadingVideo from "../../../partials/LoadingVideo.jsx";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const desktopPlayerRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const src = supportsHEVCAlpha()
      ? "https://res.cloudinary.com/dq5guzzge/video/upload/v1734688817/components/hero_section/hero_section.mov"
      : "https://res.cloudinary.com/dq5guzzge/video/upload/v1734688832/components/hero_section/hero_sect.webm";

    setVideoSrc(src);

    return () => {
      if (desktopPlayerRef.current) {
        desktopPlayerRef.current.pause();
        desktopPlayerRef.current.src = "";
      }
    };
  }, []);

  const handleLoadedData = () => {
    console.log("Video loaded successfully");
  };

  const handleError = () => {
    console.error("Video failed to load");
    setVideoError(true);
  };
  const handleClick = () => {
    navigate("contactus");
  };

  return (
    <div className="cp-hero relative bg-gradient-to-br from-[#6E3BFB] to-[#2D79FF] dark:from-[#282478] dark:to-[#150731] overflow-x-hidden">
      {/* Glow effects */}
      <div className="absolute dark:hidden -top-64 -left-32 w-[376px] h-[376px] bg-white rounded-full blur-3xl" />
      <div className="absolute hidden dark:block -top-64 -left-32 w-[376px] h-[376px] bg-[#431C95] rounded-full blur-3xl" />
      <div className="absolute dark:hidden -top-5 -left-5 w-32 h-32 bg-white/30 rounded-full blur-3xl" />

      {/* Desktop View */}
      <div className="relative hidden md:block w-full md:h-full aspect-auto md:aspect-video ">
        {/* Video Container with lower z-index */}
        <div className="absolute inset-0 z-0">
          {videoSrc && !videoError && (
            <LoadingVideo
              className="hidden md:block w-full h-full object-contain"
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

        {/* Text overlay with higher z-index */}
        <div className="hidden md:flex sm:ml-6 md:ml-10 lg:ml-20 relative z-10 h-full items-center">
          <div className="max-w-[300px] lg:max-w-[430px]">
            <h1 className="text-white font-semibold tracking-tighter">
              Lighting Fast Mobile Enterprise Payments Anywhere
            </h1>
            <p className="text-white font-normal my-[12px]">
              Acceptify enables your applications to accept worldwide, secure,
              certified, online/offline payments while removing all of your
              security concerns.
            </p>
            <button
              className="mt-4 bg-primary hover:bg-[#51A805] md:text-[14px]/[20px] lg:text-[16px] tracking-tight leading-6 flex flex-row justify-center items-center gap-3 text-white font-semibold px-3 md:py-2 lg:py-[10px] rounded-lg"
              onClick={handleClick}>
              Start Now{" "}
              <img
                src="./images/arrow.svg"
                className="size-3 mt-[4px]"
                alt="arrow"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="mx-auto sm:mb-16 mb-10 max-w-fit mt-16 sm:!w-[402px] sm:mt-[102px] text-center md:hidden relative h-full flex justify-center items-center">
        <div className="w-full ">
          <h1 className="w-full  text-center px-5 sm:w-full text-white font-semibold tracking-tighter">
            Lighting Fast Mobile Enterprise Payments Anywhere
          </h1>
          <p className="text-white w-full font-normal my-[12px]">
            Acceptify enables your applications to accept worldwide, secure,
            certified, online/offline payments while removing all of your
            security concerns.
          </p>
          <button
            className="mt-4 mx-auto bg-primary hover:bg-[#51A805] text-[11px]/[16.5px] sm:text-[12px]/[16px] tracking-tight leading-6 flex flex-row justify-center items-center gap-[10px] text-white font-semibold px-3 py-[10px] rounded-lg"
            onClick={handleClick}>
            Start Now{" "}
            <img
              src="./images/arrow.svg"
              className="size-3 mt-[4px]"
              alt="arrow"
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
