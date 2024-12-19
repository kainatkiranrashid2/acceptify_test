import React from "react";

const Header = () => {
  return (
    <section className="">
      <div className="w-full h-[100vh] relative bg-[#152b74]  overflow-hidden">
        <div className="origin-top-left -rotate-90 w-[874px] h-[1920px] left-0 top-[874px] absolute">
          <div className="w-[428.40px] h-[687.61px] left-[641.37px] top-[-445.60px] absolute origin-top-left -rotate-90 bg-[#6e3bfb] rounded-full blur-[497.35px]"></div>
          <div className="w-[428.40px] h-[687.61px] left-[774.76px] top-[-37.25px] absolute origin-top-left -rotate-90 bg-[#8b62fc] rounded-full blur-[497.35px]"></div>
          <div className="w-[428.40px] h-[687.61px] left-[1232.39px] top-0 absolute origin-top-left -rotate-90 bg-[#6436e4] rounded-full blur-[497.35px]"></div>
          <div className="w-[620.03px] h-[995.17px] left-[835.08px] top-[-126.47px] absolute origin-top-left -rotate-90 bg-[#6e3bfb] rounded-full blur-[497.35px]"></div>
          <div className="w-[219.42px] h-[352.17px] left-[-0px] top-[-587.63px] absolute origin-top-left -rotate-90 bg-[#6436e4] rounded-full blur-[497.35px]"></div>
          <div className="w-[219.42px] h-[352.17px] left-[67.47px] top-[-378.47px] absolute origin-top-left -rotate-90 bg-[#8b62fc] rounded-full blur-[497.35px]"></div>
          <div className="w-[219.42px] h-[352.17px] left-[373.56px] top-[-365.14px] absolute origin-top-left -rotate-90 bg-[#9e7cfc] rounded-full blur-[497.35px]"></div>
          <div className="w-[219.42px] h-[352.17px] left-[373.56px] top-[-522.01px] absolute origin-top-left -rotate-90 bg-[#6e3bfb] rounded-full blur-[497.35px]"></div>
        </div>
        <div className=" xl:w-[556px] left-[80px] top-[289px] absolute flex-col justify-start items-start gap-6 inline-flex">
          <div className=" text-white text-[40px] font-semibold font-['Inter'] leading-[50px]">
            Smart payment solutions
          </div>
          <p className=" text-white xl:w-[449px] font-normal ">
            Our range of hardware products transforms your mobile devices into a
            payment sled capable of taking transactions anytime, anywhere.
          </p>
        </div>
      </div>

      {/* <img
        className="w-[488px] h-[459px] left-[835px] top-[199px] absolute"
        src="https://via.placeholder.com/488x459"
      /> */}
    </section>
  );
};

export default Header;
