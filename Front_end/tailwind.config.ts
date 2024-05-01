/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        defaultwidth: "90%",
      },
      maxWidth: {
        mwidth1: "1600px",
      },
     
      colors: {
        blue: "#4264D0",
        ghostWhite: "#F5F5F7",
        lightBlue: "#ECEFFA",
        lightPurple: "#E9EBFF",
      },
      
    },
  },
  plugins: [],
};
