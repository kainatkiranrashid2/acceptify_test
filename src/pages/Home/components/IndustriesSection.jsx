import React from "react";

const IndustriesSection = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-[#3B6FFD] relative overflow-hidden">
      {/* Background Image Layer */}

      {/* Content Layer */}
      <div className="container">
        <div className="flex justify-between items-center px-20 pt-20 z-10 ">
          <div className="w-1/2 h-full">
            <h1 className=" mb-6 font-bold">Industries</h1>
            <p className="mb-6 ">
              We mean it! Enterprise Mobile Payments Anywhere, Anytime.
              Acceptify processes worldwide transactions for the most complex
              industries. Here are just a few industries we work with.
            </p>
            <button className="bg-primary text-white px-[26px] rounded-md py-[14px] text-[16px]/[27px]">
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
