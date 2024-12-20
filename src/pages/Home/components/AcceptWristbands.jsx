import { useEffect } from "react";
import { supportsHEVCAlpha } from "../../../CheckBrowserCapability/index.js";

const AcceptWristbands = () => {
  useEffect(() => {
    const player = document.getElementById("wristband_player");
    if (player) {
      player.src = supportsHEVCAlpha()
        ? "https://res.cloudinary.com/dq5guzzge/video/upload/v1734686423/components/accept_wristband/accept_wristband.mov"
        : "https://res.cloudinary.com/dq5guzzge/video/upload/v1733391834/components/accept_wristband.webm";
    }
  }, []);

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
        <div className="mx-4 sm:mx-6 md:mx-20 md:hidden flex flex-col justify-between items-center gap-8 ">
          <h2 className="text-white text-center ">Accept Wristbands</h2>
          <div className="sm:w-[323px] sm:h-[209px]">
            <video
              className="w-full h-full object-contain"
              autoPlay
              id="player"
              loop
              muted
              controlsList="nodownload" // Prevents download option in controls
              disablePictureInPicture // Disables picture-in-picture mode
              playsInline // Better mobile experience
              onContextMenu={(e) => e.preventDefault()}>
              Your browser does not support the video tag.
            </video>
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
            <video
              className="w-full h-full object-contain"
              autoPlay
              id="wristband_player"
              loop
              muted
              controlsList="nodownload" // Prevents download option in controls
              disablePictureInPicture // Disables picture-in-picture mode
              playsInline // Better mobile experience
              onContextMenu={(e) => e.preventDefault()}>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcceptWristbands;

// https://res.cloudinary.com/dq5guzzge/image/upload/v1734072874/components/parallex_bg_element.png
