/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      color: {
        primary: { 950: "#27042f" },
      },
    },
  },
  plugins: [flowbite.plugin(), require("flowbite/plugin")],
};
