import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#029ED7",
        accent: "#11AF22",
        surface: "#ffffff",
        'surface-dark': "#D9D9D9",
      }
    },
  },
  plugins: [
    flowbite,
  ],
}
