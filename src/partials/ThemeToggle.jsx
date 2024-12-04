import { useState, useEffect } from "react";
import {
  MdLightMode,
  MdDarkMode,
  MdMonitor,
  MdArrowDropDown,
} from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("system");
  const [isOpen, setIsOpen] = useState(false);

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

  const applyTheme = newTheme => {
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

  const handleThemeChange = newTheme => {
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setIsOpen(false);
  };

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <MdLightMode size={20} />;
      case "dark":
        return <MdDarkMode size={20} />;
      default:
        return <MdMonitor size={20} />;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center !w-[102px] h-[46px] py-[17.5px] px-6    bg-primary   dark:bg-transparent text-center  rounded-lg "
        aria-haspopup="listbox"
        aria-expanded={isOpen}>
        {getIcon()}
        <span className="font-semibold 3xl:text-[16px]/[16px] text-white dark:text-white    ">
          Theme
        </span>
        {/* {theme} */}
        {/* <MdArrowDropDown size={20} /> */}
      </button>
      {isOpen && (
        <ul className="absolute mt-1 w-full bg-white dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg">
          {["system", "light", "dark"].map(option => (
            <li key={option}>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => handleThemeChange(option)}>
                <div className="flex items-center">
                  {option === "system" && (
                    <MdMonitor size={20} className="mr-2" />
                  )}
                  {option === "light" && (
                    <MdLightMode size={20} className="mr-2" />
                  )}
                  {option === "dark" && (
                    <MdDarkMode size={20} className="mr-2" />
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
