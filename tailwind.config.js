/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // Add this line

  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',  // Added this line
    },
    extend: {
      backgroundImage: {
        "starry-night": "url('/assets/starry_night.jpg')",
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        '2xl': ['1.563rem', "3.19rem"],
        '3xl': ['2.13rem', "3.19rem"],
        '4xl': ['3.75rem', "4.13rem"],
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
        width: "100%",
        center: true,
        margin: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "5rem",
          xxl: "80px",
        },
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "0rem",
          xl: "0rem",
          xxl: "0rem",
        },
      },
    },

  },
  plugins: [],
};
