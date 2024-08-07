/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
// const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [

    // require('flowbite/plugin'),
    flowbite.plugin(),

  ],
}

