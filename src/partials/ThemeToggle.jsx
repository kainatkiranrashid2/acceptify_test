import { useState, useEffect } from "react";
import {
  MdLightMode,
  MdDarkMode,
  MdMonitor,
  MdArrowDropDown,
} from "react-icons/md";
import { FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("system");
  const [isOpen, setIsOpen] = useState(false);
  const [initialIcon, setInitialIcon] = useState(<MdLightMode size={28} />);

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
        console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
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
        setInitialIcon(<FiMoon size={28} />);
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
        className="flex items-center text-center rounded-lg "
        aria-haspopup="listbox"
        aria-expanded={isOpen}>
        <span className="font-semibold  text-white dark:text-white    ">
          {getIcon()}
        </span>
        {/* {theme} */}
        {/* <MdArrowDropDown size={20} /> */}
      </button>
      {isOpen && (
        <ul className="absolute mt-8 w-32 bg-white dark:text-white dark:bg-[#06142F] border border-gray-300 dark:border-gray-700 rounded-md shadow-lg  right-2">
          {["system", "light", "dark"].map((option) => (
            <li key={option}>
              <button
                className="w-full text-left px-4 py-2 text-[#1B1B1B] hover:text-[#3873FD] dark:hover:text-[#3873FD] dark:text-white"
                onClick={() => handleThemeChange(option)}>
                <div className="flex w-full items-center">
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
