/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FB2E86",
        reddy: "#FB2448",
        blue: "#2F1AC4",
        navyBlue: "#151875",
        offNavyBlue: "#3F509E",
        skyBlue: "#F2F0FF",
        offSkyBlue: "#F6F7FB",
        purpple: "#7E33E0",
        mainWhite: "#FFF",
        offWhite: "#F1F1F1",
        offGreen: "#19D16F",
      },
    },
  },
  plugins: [],
};
