import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import { fill } from "@cloudinary/url-gen/actions/resize";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { useEffect, useRef, useState } from "react";
import { supportsHEVCAlpha } from "../../../CheckBrowserCapability/index.js";

import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";

// https://res.cloudinary.com/dq5guzzge/video/upload/v1734688817/components/hero_section/hero_section.mov
// https://res.cloudinary.com/dq5guzzge/video/upload/v1734688832/components/hero_section/hero_sect.webm
const HeroSection = () => {
  const mobilePlayerRef = useRef(null);
  const desktopPlayerRef = useRef(null);

  useEffect(() => {
    const videoSrc = supportsHEVCAlpha()
      ? "https://res.cloudinary.com/dq5guzzge/video/upload/v1734688817/components/hero_section/hero_section.mov"
      : "https://res.cloudinary.com/dq5guzzge/video/upload/v1734688832/components/hero_section/hero_sect.webm";

    // Set source for both players
    if (mobilePlayerRef.current) {
      mobilePlayerRef.current.src = videoSrc;
      mobilePlayerRef.current.load(); // Force reload with new source
      mobilePlayerRef.current.play().catch((error) => {
        console.log("Error playing mobile video:", error);
      });
    }

    if (desktopPlayerRef.current) {
      desktopPlayerRef.current.src = videoSrc;
      desktopPlayerRef.current.load(); // Force reload with new source
      desktopPlayerRef.current.play().catch((error) => {
        console.log("Error playing desktop video:", error);
      });
    }
  }, []);

  return (
    <div className="cp-hero relative bg-gradient-to-br  from-[#6E3BFB] to-[#2D79FF] dark:from-[#282478] dark:to-[#150731] overflow-x-hidden">
      {/* Main white glow effect */}
      <div className="absolute dark:hidden -top-64 -left-32 w-[376px] h-[376px] bg-white rounded-full blur-3xl"></div>
      <div className="absolute hidden dark:block -top-64 -left-32 w-[376px] h-[376px] bg-[#431C95]  rounded-full blur-3xl"></div>

      {/* Secondary smaller glow for intensity */}
      <div className="absolute dark:hidden -top-5 -left-5 w-32 h-32 bg-white/30 rounded-full blur-3xl"></div>

      <div className="relative hidden md:block w-full md:h-full   aspect-auto md:aspect-video container ">
        <video
          className="absolute hidden md:block top-0 left-0 w-full h-full object-contain "
          autoPlay
          ref={desktopPlayerRef}
          loop
          muted
          controlsList="nodownload" // Prevents download option in controls
          disablePictureInPicture // Disables picture-in-picture mode
          playsInline // Better mobile experience
          onContextMenu={(e) => e.preventDefault()}>
          Your browser does not support the video tag.
        </video>

        {/* Text overlay */}
        <div className="hidden md:flex sm:ml-6 md:ml-10 lg:ml-20  relative z-10 h-full  items-center ">
          <div className="max-w-[300px] lg:max-w-[430px]">
            <h1 className=" text-white font-semibold tracking-tighter">
              Lighting Fast Mobile Enterprise Payments Anywhere
            </h1>
            <p className="text-white  font-normal my-[12px] ">
              Acceptify enables your applications to accept worldwide, secure,
              certified, online/offline payments while removing all of your
              security concerns.
            </p>

            <button className=" mt-4 bg-primary hover:bg-[#51A805] md:text-[14px]/[20px] lg:text-[16px] tracking-tight leading-6  flex flex-row justify-center items-center gap-3 text-white  font-semibold px-3 md:py-2 lg:py-[10px] rounded-lg  ">
              Start Now{" "}
              <img
                src="./images/arrow.svg"
                className="size-3 mt-[4px]"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto sm:mb-16 mb-10 w-[312px] mt-16 sm:!w-[402px]  sm:mt-[102px] text-center  md:hidden    relative  h-full flex justify-center items-center ">
        <div className="w-full ">
          <h1 className="w-[300px] mx-auto text-center px-5 sm:w-full text-white font-semibold tracking-tighter ">
            Lighting Fast Mobile Enterprise Payments Anywhere
          </h1>
          <p className="text-white w-full  font-normal my-[12px] ">
            Acceptify enables your applications to accept worldwide, secure,
            certified, online/offline payments while removing all of your
            security concerns.
          </p>

          <button className=" mt-4 mx-auto bg-primary hover:bg-[#51A805] text-[12px]/[16px] sm:text-[14px]/[20px] tracking-tight leading-6  flex flex-row justify-center items-center gap-3 text-white  font-semibold px-3 py-[5px] rounded-lg  ">
            Start Now{" "}
            <img src="./images/arrow.svg" className="size-3 mt-[4px]" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
