const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,html}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Audiowide", "cursive", "sans-serif"],
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-blue": {
          400: "#3789b7",
          500: "#1c658f",
          600: "#0d5581",
          700: "#005893",
        },
      },
    },
  },
  plugins: [],
};
