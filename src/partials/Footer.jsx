const Footer = () => {
  const handleClick = () => {
    console.log("-----");
  };
  return (
    <div className="bg-gradient-to-r from-[#3479FD] to-[#6E23FB] dark:from-[#090218] dark:to-[#090218]">
      <div
        className="py-4 bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage: `url('/assets/footer/footer_bg.svg')`,
        }}>
        <div className="container">
          <div className="hidden lg:block pt-8 pb-6">
            <div className="">
              <div className="flex items-start">
                {/* Logo */}
                <div className="xl:w-[131px] lg:mx-8  xl:mr-[100px]">
                  <a
                    href="/"
                    className="w-[83px] h-[24px] sm:w-[93px] sm:h-[26px] xl:w-[131px] xl:h-[36px]  flex dark:hidden items-center">
                    <img
                      src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812836/components/acceptifylogo_black.png"
                      className="bg-transparent h-full w-auto object-contain"
                      alt="acceptify_logo"
                      loading="lazy"
                    />
                  </a>

                  <a
                    href="/"
                    className="w-[83px] h-[24px] sm:w-[93px] sm:h-[26px] xl:w-[131px] xl:h-[36px]  dark:flex hidden items-center">
                    <img
                      src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812935/components/acceptifylogo_white.png"
                      className="bg-transparent h-full w-auto object-contain"
                      alt="acceptify_logo"
                      loading="lazy"
                    />
                  </a>
                </div>

                {/* Information Section */}
                <div className="xl:w-[131px] lg:mr-[34px] xl:mr-[60px]">
                  <h3 className="text-[16px]/[140%] text-white  mb-4">
                    EXPLORE
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="/devices"
                        className="text-white lg:text-[16px]/[140%]">
                        Payment Devices
                      </a>
                    </li>
                    <li>
                      <a
                        href="/industries"
                        className="text-white lg:text-[16px]/[140%]">
                        Industries
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white lg:text-[16px]/[140%]">
                        Solutions{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/developers"
                        className="text-white lg:text-[16px]/[140%]">
                        Developers{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white :text-[16px]/[140%]">
                        Processors
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Menu Section */}
                <div className="xl:w-[131px] lg:w-[86px] xl:mr-[60px]">
                  <h3 className="text-sm text-white font-medium mb-4 uppercase">
                    Company
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-white lg:text-[16px]/[140%]">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Section */}
                <div className="lg:w-[158px] xl:w-[183px] xl:mr-[60px] flex flex-col items-start justify-start">
                  <h3 className="text-[16px]/[140%] text-white uppercase  mb-4">
                    INQUIRIES
                  </h3>
                  <p className="text-[16px]/[140%] text-white">
                    Sales@acceptify.com
                  </p>
                  <p className="text-[16px]/[140%] text-white mt-4 ">
                    support@acceptify.com
                  </p>
                </div>
                <div className="lg:flex-1">
                  <div className="">
                    <p className="text-[16px]/[140%] text-white font-semibold  mb-2">
                      Sign-Up
                    </p>
                    <div className="flex justify-between items-start gap-2">
                      <div className="md:h-[45px] lg:w-[196px] xl:w-[224px] ">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          // value={}
                          // onChange={}
                          placeholder="Email"
                          className=" h-full px-2   border  border-gray-300 rounded-md w-full dark:bg-[#150731] bg-gray-100"
                        />
                      </div>
                      <button className="w-[92px] bg-primary hover:bg-[#51A805] md:text-[14px]/[20px] lg:text-[16px]/[24px]   text-white font-semibold px-3 md:py-2 lg:py-[10px] rounded-lg">
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
            </div>
          </div>
          <div className="hidden lg:block m-10">
            <div className="h-[2px] w-full bg-[#6E9CFF] px-10"></div>
            <div className="flex justify-between flex-row gap-8 my-3 items-center">
              <div className="text-white text-[12px]  font-normal">
                &copy; Acceptify. All Rights Reserved
              </div>
              <div className="flex gap-4">
                <div className="text-white xl:text-[12px]  font-normal items-end">
                  Terms of Service
                </div>
                <div className="text-white xl:text-[12px]  font-normal items-end">
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
          {/* tab version */}
          <div className="hidden md:block lg:hidden  px-4 pt-2 pb-5">
            <div className="xl:w-[131px] lg:mx-8 mb-6 xl:mr-[100px]">
              <a
                href="/"
                className="w-[83px] h-[24px] sm:w-[93px] sm:h-[26px] xl:w-[131px] xl:h-[36px]  flex dark:hidden items-center">
                <img
                  src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812836/components/acceptifylogo_black.png"
                  className="bg-transparent h-full w-auto object-contain"
                  alt="acceptify_logo"
                  loading="lazy"
                />
              </a>

              <a
                href="/"
                className="w-[83px] h-[24px] sm:w-[93px] sm:h-[26px] xl:w-[131px] xl:h-[36px]  dark:flex hidden items-center">
                <img
                  src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812935/components/acceptifylogo_white.png"
                  className="bg-transparent h-full w-auto object-contain"
                  alt="acceptify_logo"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-3">
                <h3 className="text-[16px]/[140%] text-white  mb-4">EXPLORE</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/devices"
                      className="text-white md:text-[14px]/[140%]">
                      Payment Devices
                    </a>
                  </li>
                  <li>
                    <a
                      href="/industries"
                      className="text-white md:text-[14px]/[140%]">
                      Industries
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white md:text-[14px]/[140%]">
                      Solutions{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/developers"
                      className="text-white md:text-[14px]/[140%]">
                      Developers{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white md:text-[14px]/[140%]">
                      Processors
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-3">
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <h3 className="text-sm text-white font-medium mb-4 uppercase">
                      Company
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-white md:text-[14px]/[140%]">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col mt-8">
                    <h3 className="text-[14px]/[140%] text-white uppercase  mb-4">
                      INQUIRIES
                    </h3>
                    <p className="text-[14px]/[140%] text-white">
                      Sales@acceptify.com
                    </p>
                    <p className="text-[14px]/[140%] text-white mt-4 ">
                      support@acceptify.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-6 items-end">
                <div className=" w-fit float-end">
                  <p className="text-[16px]/[140%] text-white font-semibold  mb-2">
                    Sign-Up
                  </p>
                  <div className="flex justify-between items-start gap-2">
                    <div className="md:h-[36px] md:w-[150px]">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        // value={}
                        // onChange={}
                        placeholder="Email"
                        className=" h-full px-2   border  border-gray-300 rounded-md w-full dark:bg-[#150731] bg-gray-100"
                      />
                    </div>
                    <button className="w-[92px] bg-primary hover:bg-[#51A805] md:text-[14px]/[20px]   text-white font-semibold px-3 md:py-2 lg:py-[10px] rounded-lg">
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block lg:hidden m-10">
            <div className="h-[2px] w-full bg-[#6E9CFF] px-10"></div>
            <div className="flex justify-between flex-row gap-8 my-3 items-center">
              <div className="text-white text-[12px]  font-normal">
                &copy; Acceptify. All Rights Reserved
              </div>
              <div className="flex gap-4">
                <div className="text-white xl:text-[12px]  font-normal items-end">
                  Terms of Service
                </div>
                <div className="text-white xl:text-[12px]  font-normal items-end">
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
          {/* mobile version */}
          <div className="block md:hidden lg:hidden  px-4 pt-2 pb-5">
            <div className="xl:w-[131px] lg:mx-8 mb-6 xl:mr-[100px]">
              <a
                href="/"
                className="w-[83px] h-[24px] sm:w-[93px] sm:h-[26px] xl:w-[131px] xl:h-[36px]  flex dark:hidden items-center">
                <img
                  src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812836/components/acceptifylogo_black.png"
                  className="bg-transparent h-full w-auto object-contain"
                  alt="acceptify_logo"
                  loading="lazy"
                />
              </a>

              <a
                href="/"
                className="w-[83px] h-[24px] sm:w-[93px] sm:h-[26px] xl:w-[131px] xl:h-[36px]  dark:flex hidden items-center">
                <img
                  src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812935/components/acceptifylogo_white.png"
                  className="bg-transparent h-full w-auto object-contain"
                  alt="acceptify_logo"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-6 sm:col-span-3">
                <h3 className="text-[16px]/[140%] text-white  mb-4">EXPLORE</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-white md:text-[14px]/[140%]">
                      Payment Devices
                    </a>
                  </li>
                  <li>
                    <a
                      href="/industries"
                      className="text-white md:text-[14px]/[140%]">
                      Industries
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white md:text-[14px]/[140%]">
                      Solutions{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/developers"
                      className="text-white md:text-[14px]/[140%]">
                      Developers{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white md:text-[14px]/[140%]">
                      Processors
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-6 sm:col-span-6">
                <div className="flex flex-col sm:flex-row items-start justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-sm text-white font-medium mb-4 uppercase">
                      Company
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-white md:text-[14px]/[140%]">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col mt-8 sm:mt-0">
                    <h3 className="text-[14px]/[140%] text-white uppercase  mb-4">
                      INQUIRIES
                    </h3>
                    <p className="text-[14px]/[140%] text-white">
                      Sales@acceptify.com
                    </p>
                    <p className="text-[14px]/[140%] text-white mt-4 ">
                      support@acceptify.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12 sm:col-span-3 items-start sm:items-end">
                <div className=" w-fit mt-8 sm:mt-0 sm:float-end">
                  <p className="text-[16px]/[140%] text-white font-semibold  mb-2">
                    Sign-Up
                  </p>
                  <div className="flex justify-between items-start">
                    <button
                      className="w-[92px] bg-primary hover:bg-[#51A805] md:text-[14px]/[20px]   text-white font-semibold px-3 py-2 lg:py-[10px] rounded-lg"
                      onClick={handleClick}>
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden lg:hidden m-10">
            <div className="h-[2px] w-full bg-[#6E9CFF] px-10"></div>
            <div className="flex justify-between flex-col flex-col-reverse sm:flex-row gap-8 my-3 items-center">
              <div className="text-white text-[12px]  font-normal">
                &copy; Acceptify. All Rights Reserved
              </div>
              <div className="flex gap-4">
                <div className="text-white xl:text-[12px]  font-normal items-end">
                  Terms of Service
                </div>
                <div className="text-white xl:text-[12px]  font-normal items-end">
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
