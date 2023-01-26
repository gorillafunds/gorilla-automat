const customFontSizes = require("./fontSize")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./stories/*.stories.js"],
  theme: {
    extend: {},
    fontSize: customFontSizes,
  },
  plugins: [],
}
