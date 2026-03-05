/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#004d2c", // Dark Green
        secondaryColor: "#795548", // Brown
        secondaryHover: "#63463b", // Darker Brown
        tertiaryColor: "#e6e6e6", // White
        navbarHoverTextColor: "#00b840", // Light Green
        navbarActiveColor: "#006938", // Green
        navbarBorderColor: "#ffffff", // White
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '2-8': '28rem',
      }
    },
  },
  plugins: [],
};
