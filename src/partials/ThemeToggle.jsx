import { useState, useEffect } from "react";
import { MdLightMode, MdMonitor } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLocation } from "react-router-dom";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("system");
  const [isOpen, setIsOpen] = useState(false);
  const [initialIcon, setInitialIcon] = useState(<MdLightMode size={28} />);
  const location = useLocation();

  // Add all paths that should have black text
  const blackTextPaths = ["/contact-us"];
  const shouldUseBlackText = blackTextPaths.includes(location.pathname);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const applyTheme = (newTheme) => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setIsOpen(false);
    switch (newTheme) {
      case "light":
        setInitialIcon(<MdLightMode size={28} />);
        break;
      case "dark":
        setInitialIcon(<FiMoon size={28} className="text-[#3873FD]" />);
        break;
      default:
        setInitialIcon(<MdMonitor size={28} />);
        break;
    }
  };

  const getIcon = () => {
    return initialIcon;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-center rounded-lg"
        aria-haspopup="listbox"
        aria-expanded={isOpen}>
        <span
          className={`font-semibold ${
            shouldUseBlackText ? "text-black" : "text-white"
          } dark:text-white`}>
          <span className="hidden lg:block">{getIcon()}</span>
          <span className="flex justify-between items-center gap-2 lg:hidden">
            <span
              className={`capitalize flex gap-2 justify-between items-center px-4 py-[10px] border-[1px] ${
                shouldUseBlackText
                  ? "border-black text-black"
                  : "border-black text-black"
              } dark:border-white rounded-md dark:text-white`}>
              <IoMdArrowDropdown />
              {theme}
            </span>
          </span>
        </span>
      </button>

      {isOpen && (
        <ul className="absolute mt-2 lg:mt-8 w-32 bg-white dark:text-white dark:bg-[#06142F] border border-gray-300 dark:border-[#5D55F9] rounded-md shadow-lg right-0 lg:right-2">
          {["light", "dark", "system"].map((option) => (
            <li key={option}>
              <button
                className="w-full text-left px-4 py-2 my-1 lg:my-2 overflow-hidden text-[#1B1B1B] hover:text-[#3873FD] hover:bg-[#F3F3F3] dark:hover:bg-[#092254] dark:hover:text-[#3873FD] dark:text-[#fff]"
                onClick={() => handleThemeChange(option)}>
                <div className="flex justify-start w-full items-center">
                  {option === "light" && (
                    <MdLightMode
                      size={20}
                      className="mr-2 dark:text-[#868686]"
                    />
                  )}
                  {option === "dark" && (
                    <FiMoon size={20} className="mr-2 dark:text-[#868686]" />
                  )}
                  {option === "system" && (
                    <MdMonitor size={24} className="mr-2 dark:text-[#868686]" />
                  )}
                  <span className="capitalize">{option}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThemeToggle;
