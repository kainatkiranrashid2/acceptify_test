import { useEffect, useRef, useState } from "react";
import { supportsHEVCAlpha } from "../../../CheckBrowserCapability/index.js";
import LoadingVideo from "../../../partials/LoadingVideo.jsx";
import CloudinaryResponsiveVideo from "../../../partials/CloudinaryResponsiveVideo.jsx";

const AcceptWristbands = () => {
  const mobilePlayerRef = useRef(null);
  const desktopPlayerRef = useRef(null);

  const [videoError, setVideoError] = useState(false);

  const hevcVideo =
    "https://res.cloudinary.com/dq5guzzge/video/upload/v1734686423/components/accept_wristband/accept_wristband.mov";
  const webMVideo =
    "https://res.cloudinary.com/dq5guzzge/video/upload/v1735637404/components/accept_wristband/accept_wristband_webm.webm";
  const hevcMobile =
    "https://res.cloudinary.com/dq5guzzge/video/upload/v1735630616/components/accept_wristband/mobile_version/accept_wristband.mov";

  const handleVideoLoaded = () => {
    console.log("Video loaded successfully:");
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
            <CloudinaryResponsiveVideo
              ref={mobilePlayerRef}
              className="h-full w-full object-contain"
              autoPlay
              loop
              muted
              playsInline
              hevcVideo={hevcVideo}
              hevcMobile={hevcMobile}
              webMVideo={webMVideo}
              onError={handleError}
              onContextMenu={(e) => e.preventDefault()}
              onLoadedData={() => handleVideoLoaded()}
            />
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
              <CloudinaryResponsiveVideo
                ref={desktopPlayerRef}
                className="h-full w-full object-contain"
                autoPlay
                loop
                muted
                playsInline
                hevcVideo={hevcVideo}
                hevcMobile={hevcMobile}
                webMVideo={webMVideo}
                onError={handleError}
                onContextMenu={(e) => e.preventDefault()}
                onLoadedData={() => handleVideoLoaded()}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcceptWristbands;
