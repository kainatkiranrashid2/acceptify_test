import { useEffect, useRef, useState } from "react";
import { supportsHEVCAlpha } from "../../../CheckBrowserCapability/index.js";
import LoadingVideo from "../../../partials/LoadingVideo.jsx";

const AcceptWristbands = () => {
  const mobilePlayerRef = useRef(null);
  const desktopPlayerRef = useRef(null);
  const [isHEVCSupported, setIsHEVCSupported] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const checkSupport = async () => {
      const supported = await supportsHEVCAlpha();
      setIsHEVCSupported(supported);
      console.log("HEVC Support:", supported);
    };

    checkSupport();
  }, []);

  const videoSrc = isHEVCSupported
    ? "https://res.cloudinary.com/dq5guzzge/video/upload/v1734686423/components/accept_wristband/accept_wristband.mov"
    : "https://res.cloudinary.com/dq5guzzge/video/upload/v1733391834/components/accept_wristband.webm";

  const handleLoadedData = () => {
    console.log("Video loaded successfully:", videoSrc);
  };

  const handleError = (error) => {
    console.error("Video failed to load:", error);
    setVideoError(true);
  };

  return (
    <section
      className="bg-gradient-to-r relative from-[#3479FD] to-[#6E23FB] dark:from-[#150731] dark:to-[#1646A7] py-16 lg:py-20
    ">
      <div
        className="absolute inset-0 bg-repeat z-0 
        bg-[url(https://res.cloudinary.com/dq5guzzge/image/upload/v1733922601/components/dots_grid.png)]
        dark:bg-[url(https://res.cloudinary.com/dq5guzzge/image/upload/v1734072935/components/grid_dark_bg.png)]"
        style={{
          objectFit: "fill",
          // backgroundSize: "100% 100%", // Adjust size as needed
        }}
      />

      <div className="container relative z-10">
        <div className="mx-6 sm:mx-6 md:mx-20 md:hidden flex flex-col justify-between items-center gap-8 ">
          <h2 className="text-white text-center ">Accept Wristbands</h2>
          <div className="sm:w-[323px] sm:h-[209px]">
            {!videoError && (
              <LoadingVideo
                className="w-full h-full object-contain"
                src={videoSrc}
                ref={mobilePlayerRef}
                autoPlay
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
          <p className="text-white text-center  w-[100%] sm:w-[592px]">
            Acceptify’s revolutionary wristband payment technologies offer
            premium experiences and speed. Customers can make quick payments
            without the need to carry cards or phones through brandable souvenir
            wristbands. Perfect for theme parks, cruise lines, and live events
            where wristbands can serve multiple workflows.{" "}
          </p>
        </div>

        <div className="mx-20 hidden md:flex justify-between items-center md:gap-12 xl:gap-32 ">
          <div className="w-1/2">
            <h2 className="text-white ">Accept Wristbands</h2>
            <p className="text-white xl:max-w-[450px] mt-4">
              Acceptify’s revolutionary wristband payment technologies offer
              premium experiences and speed. Customers can make quick payments
              without the need to carry cards or phones through brandable
              souvenir wristbands. Perfect for theme parks, cruise lines, and
              live events where wristbands can serve multiple workflows.{" "}
            </p>
          </div>
          <div className="w-1/2">
            {!videoError && (
              <LoadingVideo
                className="w-full h-full object-contain"
                src={videoSrc}
                ref={desktopPlayerRef}
                autoPlay
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
        </div>
      </div>
    </section>
  );
};

export default AcceptWristbands;

// https://res.cloudinary.com/dq5guzzge/image/upload/v1734072874/components/parallex_bg_element.png
