/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"], // Global default font
        menu: ["BrownStd", "sans-serif"], // Custom font for menu only
      },
      fontWeight: {
        light: "300",
        bold: "700",
      },
    },
  },
  plugins: [],
};
