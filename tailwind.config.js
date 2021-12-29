const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      background: "#222831",
      primary: "#393E46",
      secondary: "#00ADB5",
      lighter: "#EEEEEE",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      lobster: ["Lobster", "cursive"],
    },
  },
  plugins: [],
};
