import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../partials/ThemeToggle";
import { useNavigate } from "react-router-dom";

import { RxCross1 } from "react-icons/rx";

import { RxHamburgerMenu } from "react-icons/rx";

const NavbarMenu = [
  {
    id: 1,
    title: "Payment Devices",
    path: "/devices",
  },
  {
    id: 2,
    title: "Industries",
    path: "/industries",
  },
  {
    id: 3,
    title: "Solutions",
    path: "/contactus",
  },
  {
    id: 4,
    title: "Developers",
    path: "/developers",
  },
  {
    id: 5,
    title: "Processors",
    path: "/contactus",
  },
];

const Header = () => {
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const blackTextPaths = ["/contactus"];

  const shouldUseBlackText = blackTextPaths.includes(location.pathname);

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
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setMobileSubmenu(null);
  };
  const handleClick = () => {
    navigate("contactus");
  };

  return (
    <header>
      <div className="container">
        <nav className="h-[52px] mx-4 lg:mx-6 lg:my-[19px] xl:mt-[14px]  relative z-50 ">
          <div className=" bg-transparent h-full flex justify-between items-center gap-[60px]">
            {/* Logo section */}
            <a
              href="/"
              className="w-[83px] h-[24px] sm:w-[93px] sm:h-[26px] xl:w-[132px] xl:h-[36px]  flex dark:hidden items-center">
              <img
                src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812836/components/acceptifylogo_black.png"
                className="bg-transparent h-full w-auto object-contain"
                alt="acceptify_logo"
                loading="lazy"
              />
            </a>

            <a
              href="/"
              className="w-[83px] h-[24px] sm:w-[93px] sm:h-[26px] xl:w-[132px] xl:h-[36px]  dark:flex hidden items-center">
              <img
                src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812935/components/acceptifylogo_white.png"
                className="bg-transparent h-full w-auto object-contain"
                alt="acceptify_logo"
                loading="lazy"
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
                        className={`flex ${
                          shouldUseBlackText
                            ? "text-black hover:text-[#06142F]"
                            : "text-white hover:text-[#06142F]"
                        } dark:hover:text-[#5745FC] dark:text-white justify-center items-center font-Inter font-medium py-2 px-3 lg:text-[14px]/[24px] xl:text-[16px]/[24px] relative group`}>
                        {menu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden lg:flex gap-4 items-center">
                <button
                  className="bg-primary flex items-center hover:bg-[#51A805] text-white 3xl:text-[16px]/[16px] font-semibold !w-[139px]  !h-[46px] py-[17.5px] px-6 rounded-lg "
                  onClick={handleClick}>
                  Get Started
                </button>
                <span
                  className={`mx-10 shouldUseBlackText
                            ? "text-black "
                            : "text-white "
                            `}>
                  |
                </span>
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Hamburger menu section */}
            <div className="lg:hidden ">
              <RxHamburgerMenu
                className={`size-5 shouldUseBlackText
                            ? "text-black dark:text-white "
                            : "text-white "
                            `}
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                  setMobileSubmenu(null);
                }}
              />
            </div>
          </div>
          {/* Mobile Menu */}

          {isMobileMenuOpen && (
            <div
              className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-white
              z-50 overflow-y-auto dark:bg-[#06142] ">
              <div className="h-[100vh] dark:bg-[#06142F]">
                <ul className=" dark:bg-[#06142F]">
                  <li className="flex justify-between items-center border-b-[1px] px-6 py-4 dark:border-[#5D55F9] border-[#E7E7E7">
                    <div>
                      <a
                        href="/"
                        className="w-[83px] h-[24px] sm:w-[93px] sm:h-[26px] xl:w-[132px] xl:h-[36px]  block dark:hidden items-center">
                        <img
                          src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812836/components/acceptifylogo_black.png"
                          className="bg-transparent h-full w-auto object-contain"
                          alt="acceptify_logo"
                          loading="lazy"
                        />
                      </a>
                      <a
                        href="/"
                        className="w-[83px] h-[24px] sm:w-[93px] sm:h-[26px] xl:w-[132px] xl:h-[36px]  dark:flex hidden items-center ">
                        <img
                          src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812935/components/acceptifylogo_white.png"
                          className="bg-transparent h-full w-auto object-contain"
                          alt="acceptify_logo"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <RxCross1
                      className="size-4 dark:text-white"
                      onClick={() => {
                        setIsMobileMenuOpen(!isMobileMenuOpen);
                        setMobileSubmenu(null);
                      }}
                    />
                  </li>
                  {NavbarMenu.map((menu) => (
                    <li
                      key={menu.id}
                      className=" py-4 px-4 mb-0 mt-0 border-b-[1px] dark:border-[#5D55F9] border-[#E7E7E7]">
                      <Link
                        to={menu.path}
                        onClick={handleLinkClick}
                        className="dark:text-white ">
                        {menu.title}
                      </Link>
                    </li>
                  ))}
                  <div className="border-b-[1px] dark:border-[#5D55F9] border-[#E7E7E7] py-[22px] px-4">
                    <button
                      className=" bg-primary flex items-center hover:bg-[#51A805] text-white text-[11px]/[16px] font-semibold !w-[92px]   py-[10px] px-[14px] rounded-lg "
                      onClick={handleClick}>
                      Get Started
                   </button>
                    </div>
                  <li className="flex justify-between items-center border-b-[1px] px-4 py-8 dark:border-[#5D55F9] border-[#E7E7E7 text-black dark:text-white">
                    Switch Theme
                    <ThemeToggle />
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
