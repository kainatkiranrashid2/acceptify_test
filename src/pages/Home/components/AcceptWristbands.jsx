import React from "react";

const AcceptWristbands = () => {
  return (
    <section className="bg-gradient-to-br relative from-[#3479FD] to-[#6E23FB] dark: py-20">
      <div
        className="absolute inset-0 bg-repeat "
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dq5guzzge/image/upload/v1733922601/components/dots_grid.png)`,
          backgroundSize: "100% 100%", // Adjust size as needed
        }}
      />

      <div className="container ">
        <div className="mx-20 flex justify-between items-center md:gap-12 xl:gap-32 ">
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
            <video className="w-full h-full object-contain" autoPlay loop muted>
              <source
                src="https://res.cloudinary.com/dq5guzzge/video/upload/v1733391834/components/accept_wristband.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcceptWristbands;
