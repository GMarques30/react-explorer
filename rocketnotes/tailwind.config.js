/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: { 900: "#232129", 800: "#312E38", 700: "#3E3B47" },
      colors: {
        white: "#F4EDE8",
        orange: "#FF9000",
        red: "#FF002E",
        gray: {
          100: "#999591",
          300: "#666360",
          700: "#3E3B47",
          800: "#312E38",
          900: "#232129",
        },
      },
      fontFamily: {
        serif: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
