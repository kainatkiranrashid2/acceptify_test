/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Add this line

  theme: {
    screens: {
      xs: "320",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px", // Added this line
    },

    extend: {
      backgroundImage: {
        "represent-brand-gradient":
          "linear-gradient(0deg, #FFF 65.13%, #9EC1FF 192.35%)",
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
        "2xl": ["1.563rem", "3.19rem"],
        "3xl": ["2.13rem", "3.19rem"],
        "4xl": ["3.75rem", "4.13rem"],
      },
      backgroundColor: {
        "night-sky": "#000000",
      },

      colors: {
        primary: "#65D008",
      },
      borderRadius: {
        "3xl": "3rem",
      },

      container: {
        screens: {
          "2xl": "1536px", // This ensures max-width of 1536px at 2xl breakpoint
          xl: "1280px",
          lg: "1024px",
          md: "768px",
          sm: "640px",
          // xs: "320px",
        },
        center: true,
        width: "100%",
        // maxWidth: "1536px",
      },
    },
  },
  plugins: [],
};
