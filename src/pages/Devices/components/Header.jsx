import React from "react";

const Header = () => {
  return (
    <section
      className="h-full  w-full  bg-cover bg-center relative bg-no-repeat py-16 md:py-20 bg-[url(https://res.cloudinary.com/dq5guzzge/image/upload/v1734934920/components/devices_header/devices_header_bg.jpg)]
    // dark:bg-[url(https://res.cloudinary.com/dq5guzzge/image/upload/v1734935940/components/devices_header/devices_header_dark_bg.jpg)]">
      <div className="container">
        <div className="hidden mt-[132px] mb-20 md:flex sm:ml-6 md:ml-10 lg:ml-20  relative z-10 w-[1376] h-[393]  items-center md:gap-10 lg:gap-20">
          <div className=" 2xl:w-[500px] lg:w-[425px] md:w-[375px]">
            <h1 className=" text-white font-semibold tracking-tighter">
              Smart payment solutions
            </h1>
            <p className="text-white mt-6 font-normal my-[12px] ">
              Our range of hardware products transforms your mobile devices into
              a payment sled capable of taking transactions anytime, anywhere.
            </p>
          </div>
          <div className="2xl:h-[393px] 2xl:w-[715px] xl:h-[301px] xl:w-[547px] lg:h-[232px] lg:w-[421px] md:h-[186px] md:w-[318px] ">
            <img
              src="https://res.cloudinary.com/dq5guzzge/image/upload/v1735210797/components/devices_header/header_devices.png"
              alt=""
              className="w-full h-full object-contain mx-auto"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[40px] mb-20 md:hidden  lg:ml-20  relative z-10 ">
          <div className="w-[300px] h-[232px] sm:w-[397px] sm:h-[232px]  ">
            <img
              src="https://res.cloudinary.com/dq5guzzge/image/upload/v1735210797/components/devices_header/header_devices.png"
              alt=""
              className="w-full h-full object-contain mx-auto"
            />
            <h1 className=" text-white text-center font-semibold tracking-tighter">
              Smart payment solutions
            </h1>
            <p className="text-white text-center font-normal my-[12px] text-[12px] ">
              Our range of hardware products transforms your mobile devices into
              a payment sled capable of taking transactions anytime, anywhere.
            </p>
          </div>
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
