/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'black-piano': {
          1: '#120F13',
          2: '#0B090C',
        },
      },
      keyframes: {
        fadeIn: {
          "0%, 100%": {
            transform: "translateY(50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.7s  ease forwards",
      },
    },
  },
  plugins: [],
};
