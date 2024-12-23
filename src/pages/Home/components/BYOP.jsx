import { useEffect, useRef } from "react";
import { supportsHEVCAlpha } from "../../../CheckBrowserCapability/index.js";
import LoadingVideo from "../../../partials/LoadingVideo.jsx";

const BYOP = () => {
  const mobilePlayerRef = useRef(null);
  const desktopPlayerRef = useRef(null);

  useEffect(() => {
    const videoSrc = supportsHEVCAlpha()
      ? "https://res.cloudinary.com/dq5guzzge/video/upload/v1734685976/components/byop/byop.mov"
      : "https://res.cloudinary.com/dq5guzzge/video/upload/v1733836482/components/bring_your_own_process.webm";

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
    <section
      className="dark:bg-[#06142F]" // Added useful background classes
    >
      <div className="container  ">
        <div className="mx-6 py-[50px] sm:pt-10 sm:pb-20 md:py-20">
          <div className=" relative md:hidden flex flex-col items-center justify-center overflow-hidden gap-10 ">
            {/* <div className="absolute oval-shape right-0  "></div> */}

            <h1 className=" font-semibold mb-4 dark:text-white">
              BYOP - Bring Your Own Processor
            </h1>

            <div className="w-[168px] h-[130px] sm:w-[282px] md:h-[212px]">
              <LoadingVideo
                className="w-full h-full object-contain"
                autoPlay
                ref={mobilePlayerRef}
                loop
                muted
                controlsList="nodownload" // Prevents download option in controls
                disablePictureInPicture // Disables picture-in-picture mode
                playsInline // Better mobile experience
                onContextMenu={(e) => e.preventDefault()}>
                Your browser does not support the video tag.
              </LoadingVideo>
            </div>
            <p className=" text-center dark:text-white sm:w-[521px]">
              Acceptify empowers merchants with complete processor flexibility.
              Seamlessly integrate your preferred payment processing partner and
              move between processors without changing a line of code.
            </p>
          </div>
          <div className=" relative hidden md:flex flex-col items-center justify-center overflow-hidden ">
            {/* <div className="absolute oval-shape right-0  "></div> */}
            <div className=" flex flex-col items-center justify-center">
              <h1 className=" font-semibold mb-4 dark:text-white">
                BYOP - Bring Your Own Processor
              </h1>
              <p className=" text-center dark:text-white md:w-[526px] lg:w-[708px] xl:w-[735px] 2xl:w-[900px]  ">
                Acceptify empowers merchants with complete processor
                flexibility. Seamlessly integrate your preferred payment
                processing partner and move between processors without changing
                a line of code.
              </p>
            </div>
            <div className="2xl:w-[521.88px] 2xl:h-[363px] xl:w-[467px] xl:h-[324px] lg:w-[391px] lg:h-[269.08px] md:w-[297px] md:h-[204px]">
              <LoadingVideo
                className="w-full h-full object-contain"
                autoPlay
                ref={desktopPlayerRef}
                loop
                muted
                controlsList="nodownload" // Prevents download option in controls
                disablePictureInPicture // Disables picture-in-picture mode
                playsInline // Better mobile experience
                onContextMenu={(e) => e.preventDefault()}>
                Your browser does not support the video tag.
              </LoadingVideo>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BYOP;

// https://res.cloudinary.com/dq5guzzge/video/upload/v1733312259/components/represent_your_brand.webm
// https://res.cloudinary.com/dq5guzzge/image/upload/v1733312955/components/represent_your_brand.svg
