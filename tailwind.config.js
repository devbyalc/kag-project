/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    colors: {
      main: {
        50: "#ffb08f",
        100: "#ffa685",
        200: "#ff9c7b",
        300: "#f89271",
        400: "#ee8867",
        500: "#e47e5d",
        600: "#da7453",
        700: "#d06a49",
        800: "#c6603f",
        900: "#bc5635",
      },
      light: {
        50: "#fffafa",
        100: "#fff0f0",
        200: "#ffe6e6",
        300: "#f7dcdc",
        400: "#edd2d2",
        500: "#e3c8c8",
        600: "#d9bebe",
        700: "#cfb4b4",
        800: "#c5aaaa",
        900: "#bba0a0",
      },
      dark: {
        50: "#865748",
        100: "#7c4d3e",
        200: "#724334",
        300: "#68392a",
        400: "#5e2f20",
        500: "#542516",
        600: "#4a1b0c",
        700: "#401102",
        800: "#360700",
        900: "#2c0000",
      },
    },
  },
  plugins: [require("daisyui")],
};
