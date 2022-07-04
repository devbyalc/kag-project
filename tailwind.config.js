/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
      secondary: {
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
    },
  },
  plugins: [require("daisyui")],
};
