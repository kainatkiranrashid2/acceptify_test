import React from "react";

const IndustriesSection = () => {
  return (
    <div className="py-13 md:py-20 bg-gradient-to-b from-white from-[16.97%] to-[#3B6FFD] to-[100%] relative overflow-hidden dark:bg-gradient-to-b dark:from-[#0C0221] dark:to-[#0C0221] dark:relative">
      {/* Background Image Layer */}
      <div className="block absolute  opacity-100  dark:opacity-100 -left-72 bottom-0 transform -rotate-[9deg] z-0">
        <img
          src="https://res.cloudinary.com/dq5guzzge/image/upload/v1734065022/components/our_customers_dark_mode/industries_bg.png"
          alt=""
          className="w-1/2"
        />
      </div>
      {/* Content Layer */}
      <div className="container relative z-10">
        <div className="flex flex-col md:hidden justify-between items-center  pb-8 pt-10 z-10 ">
          <h1 className=" mb-6 font-semibold dark:text-white">Industries</h1>

          <div className="mx-auto w-[222px] h-[214px] sm:w-[247px] sm:h-[239px] my-8">
            <video className="w-full h-full object-contain" autoPlay loop muted>
              <source
                src="https://res.cloudinary.com/dq5guzzge/video/upload/v1733459520/components/industries.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="mb-4 dark:text-white text-center ">
            We mean it! Enterprise Mobile Payments Anywhere, Anytime. Acceptify
            processes worldwide transactions for the most complex industries.
            Here are just a few industries we work with.
          </p>
          <button className="bg-primary text-white px-[14px] hover:bg-[#51A805] rounded-md py-[5px] text-[9.6px]/[14px] sm:text-[11px]/[16px]">
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
            <button className="bg-primary text-white px-[14px] hover:bg-[#51A805] rounded-md py-[10px] text-[16px]/[27px]">
              Explore Industries
            </button>
          </div>
          <div className="w-1/2 h-full">
            <video className="w-full h-full object-contain" autoPlay loop muted>
              <source
                src="https://res.cloudinary.com/dq5guzzge/video/upload/v1733459520/components/industries.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
// https://res.cloudinary.com/dq5guzzge/video/upload/c_fill,w_1000,h_600/v1733459520/components/industries.webm
