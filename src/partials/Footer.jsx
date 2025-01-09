import { useState } from "react";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const handleClick = () => {
    console.log("Button clicked!");

    setShowModal(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
            <div className="px-6 xl:px-10">
              <div className="flex justify-between w-full">
                {/* Logo */}
                <div className="lg:w-[131px] h-9 xl:mr-[100px]">
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
                <div className="lg:w-[134px] lg:mr-[60px] ]">
                  <h3 className="text-[14px]/[140%] text-white  mb-4">
                    EXPLORE
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="/devices"
                        className="text-white lg:text-[14px]/[140%] xl:text-[16px]/[140%]">
                        Payment Devices
                      </a>
                    </li>
                    <li>
                      <a
                        href="/industries"
                        className="text-white lg:text-[14px]/[140%] xl:text-[16px]/[140%]">
                        Industries
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white lg:text-[14px]/[140%] xl:text-[16px]/[140%]">
                        Solutions{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/developers"
                        className="text-white lg:text-[14px]/[140%] xl:text-[16px]/[140%]">
                        Developers{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white lg:text-[14px]/[140%] xl:text-[16px]/[140%]">
                        Processors
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Menu Section */}
                <div className="xl:w-[134px] lg:w-[86px] xl:mr-[60px]">
                  <h3 className="text-sm text-white font-medium mb-4 uppercase">
                    Company
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-white lg:text-[14px]/[140%] xl:text-[16px]/[140%]">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Section */}
                <div className="lg:w-[158px] xl:w-[183px] xl:mr-[60px] flex flex-col items-start justify-start">
                  <h3 className="lg:text-[14px]/[140%] xl:text-[16px]/[140%] text-white uppercase  mb-4">
                    INQUIRIES
                  </h3>
                  <p className="lg:text-[14px]/[140%] xl:text-[16px]/[140%] text-white">
                    sales@acceptify.com
                  </p>
                  <p className="lg:text-[14px]/[140%] xl:text-[16px]/[140%] text-white mt-4 ">
                    support@acceptify.com
                  </p>
                </div>
                <div className="lg:w-[284px] xl:[240px]">
                  <div className="flex flex-col gap-1">
                    <p className="lg:text-[14px]/[140%] xl:text-[16px]/[140%] text-white font-semibold  mb-2">
                      Sign-up for Newsletter
                    </p>
                    <div className="flex  items-start gap-2">
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
                        Sign-up
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
            <div className="md:px-10 md:py-6 w-full">
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
            <div className="flex flex-row md:px-10 md:py-6 justify-between">
              <div className="w-[316px] flex">
                <div className="w-[134px]">
                  <h3 className="lg:text-[16px]/[140%] xl:text-[16px]/[140%] text-white  mb-4">
                    EXPLORE
                  </h3>
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
                <div className="w-[158px]">
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
                        sales@acceptify.com
                      </p>
                      <p className="text-[14px]/[140%] text-white mt-4 ">
                        support@acceptify.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[240px] ">
                <div className=" w-fit ">
                  <p className="lg:text-[16px]/[140%] xl:text-[16px]/[140%] text-white font-semibold  mb-2">
                    Sign-up for Newsletter
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
                <h3 className="lg:text-[16px]/[140%] xl:text-[16px]/[140%] text-white  mb-4">
                  EXPLORE
                </h3>
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
                      sales@acceptify.com
                    </p>
                    <p className="text-[14px]/[140%] text-white mt-4 ">
                      support@acceptify.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12 sm:col-span-3 items-start sm:items-end">
                <div className=" w-fit mt-8 sm:mt-0 sm:float-end">
                  <p className="text-[16px]/[140%] w-[95px] text-white font-semibold  mb-2">
                    Sign-up for Newsletter
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
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black bg-opacity-50 ">
            <div className="relative w-auto  mx-auto my-6">
              <div className="relative flex flex-col  bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none w-[300px] sm:w-[544px] md:w-[560px]">
                <div className="flex flex-col  overflow-y-auto scrollbar-hide">
                  <div className="py-9 px-10">
                    <div className="flex relative justify-between items-center mb-8">
                      <div></div>
                      <h2 className="text-center font-semibold">
                        Join the Waitlist
                      </h2>
                      <button
                        onClick={() => setShowModal(false)}
                        className="text-gray-500 hover:text-gray-700">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <div className="absolute bottom-[-20px] left-[5%] right-[5%] h-[1px] bg-gray-200"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="flex justify-center items-center ">
                        <label htmlFor="email" className="">
                          <p className="font-semibold lg:text-[16px]/[27px] ">
                            Email
                          </p>
                        </label>
                        <div className="sm:h-[35px] h-[28px]  w-[199px] sm:w-[379px] ml-4">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="johndoe@youremail.com"
                            className="h-full px-2  ml-2 border border-gray-300 rounded-md w-full bg-gray-100"
                          />
                        </div>
                      </div>
                      \
                      <div className="float-end  gap-4 pt-4">
                        <button
                          type="submit"
                          className=" bg-primary text-white px-[14px] hover:bg-[#51A805] py-[10px] text-[14px]/[20px] rounded-sm md:rounded-lg">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Footer;
