import { useRef, useState } from "react";
import CloudinaryResponsiveVideo from "../../../partials/CloudinaryResponsiveVideo.jsx";

const IndustriesSection = () => {
  const mobilePlayerRef = useRef(null);
  const desktopPlayerRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  const hevcVideo =
    "https://res.cloudinary.com/dq5guzzge/video/upload/v1734687227/components/industries_section/industries_section.mov";
  const webMVideo =
    "https://res.cloudinary.com/dq5guzzge/video/upload/v1733459520/components/industries.webm";
  const hevcMobile =
    "https://res.cloudinary.com/dq5guzzge/video/upload/v1735630910/components/industries_section/mobile_version/industries_section.mov";

  const handleVideoLoaded = () => {
    console.log("Video loaded successfully:");
  };

  const handleError = (error) => {
    console.error("Video failed to load:", error);
    setVideoError(true);
  };

  return (
    <div className="py-13 md:py-20 bg-gradient-to-b from-white from-[16.97%] to-[#3B6FFD] to-[100%] relative overflow-hidden dark:bg-gradient-to-b dark:from-[#0C0221] dark:to-[#0C0221] dark:relative">
      {/* Background Image Layer */}
      <div className="block absolute  opacity-100  dark:opacity-100 -left-72 bottom-0 transform -rotate-[9deg] z-0">
        <img
          src="https://res.cloudinary.com/dq5guzzge/image/upload/v1734065022/components/our_customers_dark_mode/industries_bg.png"
          alt=""
          className="w-1/2"
          loading="lazy"
        />
      </div>
      {/* Content Layer */}
      <div className="container relative z-10">
        <div className="mx-6 flex flex-col md:hidden justify-between items-center  pb-8 pt-10 z-10 ">
          <h1 className=" mb-6 font-semibold dark:text-white">Industries</h1>

          <div className="mx-auto w-[222px] h-[214px] sm:w-[247px] sm:h-[239px] my-8">
            {!videoError && (
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
            )}
          </div>
          <p className="mb-4 dark:text-white text-center ">
            We mean it! Enterprise Mobile Payments Anywhere, Anytime. Acceptify
            processes worldwide transactions for the most complex industries.
            Here are just a few industries we work with.
          </p>
          <button className="bg-primary text-white px-[14px] hover:bg-[#51A805] rounded-sm md:rounded-lg py-[6.8px] text-[11px]/[16.5px] sm:text-[11px]/[16px]">
            Explore Industries
          </button>
        </div>
        <div className="hidden md:flex justify-between items-center px-20 pt-20 z-10 ">
          <div className="w-1/2 h-full ">
            <h1 className=" mb-6 font-semibold dark:text-white">Industries</h1>
            <p className="mb-6 dark:text-white ">
              We mean it! Enterprise Mobile Payments Anywhere, Anytime.
              Acceptify processes worldwide transactions for the most complex
              industries. Here are just a few industries we work with.
            </p>
            <button className="bg-primary text-white px-[14px] hover:bg-[#51A805] py-[10px] text-[16px]/[27px] rounded-sm md:rounded-lg">
              Explore Industries
            </button>
          </div>
          <div className="w-1/2 h-full">
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
    </div>
  );
};

export default IndustriesSection;
// https://res.cloudinary.com/dq5guzzge/video/upload/c_fill,w_1000,h_600/v1733459520/components/industries.webm
