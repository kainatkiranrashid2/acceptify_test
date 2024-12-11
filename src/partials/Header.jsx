import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../partials/ThemeToggle";

import TextComponent from "../components/TextComponent";
import { motion, AnimatePresence } from "framer-motion";
// import { FaE } from "react-icons/fa6";
import { FaEquals } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const NavbarMenu = [
  {
    id: 1,
    title: "Payment Devices",
    path: "/",
  },
  {
    id: 2,
    title: "Industries",
    path: "#",
  },
  {
    id: 3,
    title: "Solutions",
    path: "#",
  },
  {
    id: 4,
    title: "Developers",
    path: "/industries",
  },
  {
    id: 5,
    title: "Processors",
    path: "#",
  },
];

const Header = () => {
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const dropdownRef = useRef(null);
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth < 1024); // Assuming 768px is your breakpoint for mobile
  };
  useEffect(() => {
    checkIfMobile();

    const handleResize = () => {
      checkIfMobile();
      if (window.innerWidth >= 1024) {
        setIsSolutionOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Toggle scroll lock when mobile menu opens/closes
    toggleScrollLock(isMobileMenuOpen);

    return () => {
      window.removeEventListener("resize", handleResize);
      toggleScrollLock(false); // Ensure scroll is enabled when component unmounts
    };
  }, [isMobileMenuOpen]); // Add isMobileMenuOpen to the dependency array
  const toggleScrollLock = (lock) => {
    document.body.style.overflow = lock ? "hidden" : "";
    document.body.style.height = lock ? "100%" : "";
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSolutionOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="h-[52px] mx-4 lg:mx-6 lg:my-[19px] xl:mt-[14px]  relative z-50 ">
          <div className=" bg-transparent h-full flex justify-between items-center gap-[60px]">
            {/* Logo section */}
            <a
              href="/"
              className="h-[52px] md:w-[152px] xl:w-[188px] flex dark:hidden items-center">
              <img
                src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812836/components/acceptifylogo_black.png"
                className="bg-transparent h-full w-auto object-contain"
                alt="acceptify_logo"
              />
            </a>

            <a
              href="/"
              className="h-[52px] md:w-[152px] xl:w-[188px] dark:flex hidden items-center">
              <img
                src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812935/components/acceptifylogo_white.png"
                className="bg-transparent h-full w-auto object-contain"
                alt="acceptify_logo"
              />
            </a>

            {/* https://res.cloudinary.com/dq5guzzge/image/upload/v1733812836/components/acceptifylogo_black.png */}
            {/* Menu Section */}
            <div className="hidden lg:flex  justify-between w-full">
              <div className="flex flex-row items-center justify-between ">
                <ul className="flex items-center lg:gap-[2px] xl:gap-4 2xl:gap-6">
                  {NavbarMenu.map((menu) => (
                    <li key={menu.id} className="">
                      <Link
                        to={menu.path}
                        className="flex text-white dark:text-white  justify-center items-center font-Inter font-medium py-2 px-3 lg:text-[14px]/[24px] xl:text-[16px]/[24px]  relative group">
                        {menu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden lg:flex gap-4 items-center">
                <motion.button
                  className=" bg-primary flex items-center text-white 3xl:text-[16px]/[16px] font-semibold !w-[139px]  !h-[46px] py-[17.5px] px-6 rounded-lg "
                  whileHover={{
                    scale: 1.2,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}>
                  Get Started
                </motion.button>
                <span className="mx-10 text-white">|</span>
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Hamburger menu section */}
            <div className="lg:hidden ">
              <RxHamburgerMenu
                className="size-5 text-white"
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                  setMobileSubmenu(null);
                }}
              />
            </div>
          </div>
          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <div
                className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-white
              z-50 overflow-y-auto">
                <div className="container py-4">
                  <ul className="space-y-4">
                    {NavbarMenu.map((menu) => (
                      <li key={menu.id}>
                        <div className="flex justify-between items-center font-Inter font-semibold py-2 px-3 hover:text-primary cursor-pointer">
                          <Link to={menu.path}>{menu.title}</Link>
                        </div>
                        {menu.title === "Industries" &&
                          mobileSubmenu === "Industries" && (
                            <div className="pl-6 mt-2 space-y-4">
                              <div>
                                <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-2">
                                  BUSINESS SOLUTIONS
                                </h3>
                                <ul className="space-y-2">
                                  {menu.dropdown.businessSolutions.map(
                                    (item, index) => (
                                      <li
                                        key={index}
                                        className="flex items-start">
                                        <div className="mr-2 mt-1 flex justify-center items-center">
                                          {item.icon}
                                        </div>
                                        <div>
                                          <p className="text-[14px] text-dark font-Inter font-semibold">
                                            {item.title}
                                          </p>
                                          <p className="text-[12px] text-dark2 font-Space_Grotesk">
                                            {item.description}
                                          </p>
                                        </div>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div>
                                <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-2">
                                  INDUSTRY SOLUTIONS
                                </h3>
                                <ul className="space-y-2">
                                  {menu.dropdown.industrySolutions.map(
                                    (item, index) => (
                                      <li
                                        key={index}
                                        className="flex items-start">
                                        <div className="mr-2 mt-1 flex justify-center items-center">
                                          {item.icon}
                                        </div>
                                        <div>
                                          <p className="text-[14px] text-dark font-Inter font-semibold">
                                            {item.title}
                                          </p>
                                          <p className="text-[12px] text-dark2 font-Space_Grotesk">
                                            {item.description}
                                          </p>
                                        </div>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div>
                                <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-2">
                                  INDUSTRY SOLUTIONS
                                </h3>
                                <ul className="space-y-2">
                                  {menu.dropdown.insight.map((item, index) => (
                                    <li
                                      key={index}
                                      className="flex items-center">
                                      <p className="text-dark font-semibold font-Inter">
                                        {item.title}
                                      </p>
                                    </li>
                                  ))}
                                </ul>
                                <div className="mt-2 relative isolate">
                                  <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-4">
                                    INSIGHT
                                  </h3>
                                  <img
                                    src="/assets/illustration.png"
                                    alt="illustration"
                                    className="w-full max-w-[200px] mb-4  h-full object-contain mx-auto relative"
                                  />
                                  <img
                                    src="/assets/ornament_top.png"
                                    alt="Ornament Top"
                                    className="w-5 max-w-20 absolute right-[-5px] top-[-30px] h-full object-contain mx-auto"
                                  />
                                </div>
                                <div className=" mt-2">
                                  <TextComponent
                                    text={menu.dropdown.insightDescription}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                      </li>
                    ))}
                  </ul>
                  <button className="primary-btn px-4 py-2 rounded-lg mt-6 w-full">
                    Request a demo
                  </button>
                </div>
              </div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Solutions Dropdown - Outside the navbar */}
        <AnimatePresence>
          {isSolutionOpen && !isMobile && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 w-full bg-white shadow-lg p-6 z-40">
              <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 lg:grid-cols-4 gap-4">
                <div>
                  <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-4">
                    BUSINESS SOLUTIONS
                  </h3>
                  <ul>
                    {NavbarMenu.find(
                      (item) => item.title === "Industries"
                    ).dropdown.businessSolutions.map((item, index) => (
                      <li key={index} className="flex items-start mb-4">
                        <div className="mr-2 mt-1 flex justify-center items-center">
                          {item.icon}
                        </div>
                        {/* <i className={`${item.icon} mr-2`}></i> */}
                        <Link
                          onClick={() => {
                            console.log("----");
                            setIsSolutionOpen(!isSolutionOpen);
                          }}
                          className=""
                          to="">
                          <p className="text-[16px] text-dark font-Inter  font-semibold">
                            {item.title}
                          </p>
                          <p className="text-[14px] text-dark2 font-Space_Grotesk ">
                            {item.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-4">
                    INDUSTRY SOLUTIONS
                  </h3>
                  <ul>
                    {NavbarMenu.find(
                      (item) => item.title === "Industries"
                    ).dropdown.industrySolutions.map((item, index) => (
                      <li key={index} className="flex items-start mb-4">
                        <div className="mr-2 mt-1 flex justify-center items-center">
                          {item.icon}
                        </div>
                        <Link
                          to=""
                          onClick={() => {
                            console.log("----");
                            setIsSolutionOpen(!isSolutionOpen);
                          }}>
                          <p className="text-[16px] text-dark font-Inter  font-semibold">
                            {item.title}
                          </p>
                          <p className="text-[14px] text-dark2 font-Space_Grotesk ">
                            {item.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-4">
                    INDUSTRY SOLUTIONS
                  </h3>
                  <ul>
                    {NavbarMenu.find(
                      (item) => item.title === "Industries"
                    ).dropdown.insight.map((item, index) => (
                      <li key={index} className="flex items-center mb-2">
                        {/* <i className={`${item.icon} mr-2`}></i> */}
                        <Link
                          onClick={() => {
                            console.log("----");
                            setIsSolutionOpen(!isSolutionOpen);
                          }}
                          to=""
                          className="text-dark font-semibold font-Inter">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-4">
                    INSIGHT
                  </h3>
                  <div className="relative isolate">
                    <img
                      src="/assets/illustration.png"
                      className="w-full max-w-[250px] h-full object-contain mx-auto"
                      alt="illustration"
                    />
                    <img
                      src="/assets/ornament_top.png"
                      className="w-5 max-w-20 absolute right-[-20px] top-[-60px] h-full object-contain mx-auto"
                      alt="illustration"
                    />
                  </div>
                  <div className="mt-4">
                    <TextComponent
                      text={
                        NavbarMenu.find((item) => item.title === "Industries")
                          .dropdown.insightDescription
                      }
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
