/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: {
          950: "#05295c",
          50: "#e6f0fa", // Very light
          100: "#cce0f5", // Light
          200: "#99c1eb", // Lighter
          300: "#66a2e1", // Mid-light
          400: "#3382d7", // Normal
          500: "#0063cd", // Slightly dark
          600: "#0053a8", // Dark
          700: "#004285", // Darker
          800: "#003361", // Very dark
          900: "#05295c",
        },
      },
    },
  },
  plugins: [flowbite.plugin(), require("flowbite/plugin")],
};
