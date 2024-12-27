import { useEffect, useRef, useState } from "react";
import { supportsHEVCAlpha } from "../../../CheckBrowserCapability/index.js";
import LoadingVideo from "../../../partials/LoadingVideo.jsx";
// https://res.cloudinary.com/dq5guzzge/video/upload/v1734686819/components/cta_section/call_to_action.mov
// https://res.cloudinary.com/dq5guzzge/video/upload/v1734686901/components/cta_section/call_to_action_mov.webm

const CTASection = () => {
  const videoRef = useRef(null);

  const [videoError, setVideoError] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const src = supportsHEVCAlpha()
      ? "https://res.cloudinary.com/dq5guzzge/video/upload/v1734686819/components/cta_section/call_to_action.mov"
      : "https://res.cloudinary.com/dq5guzzge/video/upload/v1734686901/components/cta_section/call_to_action_mov.webm";

    setVideoSrc(src);

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = "";
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
  return (
    <div className="container">
      <div className="md:px-10 md:py-20 xl:p-20  ">
        <div className="flex bg-gradient-to-br from-[rgb(110,59,251)] to-[#3479FD] dark:bg-gradient-to-r dark:from-[#200B49] dark:to-[#1646A7] mx-5 overflow-hidden rounded-xl">
          <div className="w-full lg:w-[350px] xl:w-[491px] flex items-center my-10 px-5  sm:px-8 lg:pl-[56px] lg:pr-[42px] xl:pr-[50px] xl:pl-[80px]  rounded-xl ">
            <div>
              <h1 className="lg:text-[24px] xl:text-[34px] font-bold w-full text-white">
                Ready to get Started?
              </h1>
              <p className=" mt-3 text-le text-white lg:w-[288px] xl:w-[411px]">
                See how Acceptify brings the ease of implementation and peace of
                mind of a fully certified payments platform. Get in touch with
                our experts now!
              </p>
              <button className="text-[11px]/[16.5px] sm:text-[11px]/[16px] md:text-[14px]/[20px] lg:text-[11px]/[16.5px] xl:text-[13px]/[19px] 2xl:text-[16px]/[24px] mt-5 bg-primary hover:bg-[#51A805] rounded-sm md:rounded-lg py-[10px] px-[9px] text-white ">
                Contact an Expert
              </button>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-1 ">
            {videoSrc && !videoError && (
              <LoadingVideo
                className="w-full h-full object-contain"
                src={videoSrc}
                ref={videoRef}
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
    </div>
  );
};

export default CTASection;
