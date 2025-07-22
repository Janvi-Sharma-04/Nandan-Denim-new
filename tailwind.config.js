// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        verticalScroll: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" }, // Adjust for half if duplicating content
        },
      },

      fontFamily: {
        roboto: ["'Roboto'", "sans-serif"],
        arial: ["Arial", "sans-serif"], // system font
        montserrat: ["'Montserrat'", "sans-serif"],
        signika: ["'Signika'", "sans-serif"],
        opensans: ["'Open Sans'", "sans-serif"],
        oldstandard: ["'Old Standard TT'", "serif"],
      },
      animation: {
        verticalScroll: "verticalScroll 20s linear infinite",
      },
    },
  },
  plugins: [],
};
