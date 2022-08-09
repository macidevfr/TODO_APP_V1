/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   black: "#000",
    //   white: "#fff",

    //   blue: {
    //     midnight: "#22175c",
    //     sky: "#3A51C6",
    //     pale: "#6667AB",
    //   },
    // },
    extend: {},

    plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
  },
};
