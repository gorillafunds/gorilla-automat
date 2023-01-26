/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
const customColors = require("@gorilla-automat/designtokens/colors")
const customFontSizes = require("@gorilla-automat/designtokens/fontSize")

// TODO: import designtokens from it's own configuration
// TODO: import fonts from designtokens
module.exports = {
  relative: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      ...defaultTheme.boxShadow,
      DEFAULT: [
        "0px 4.1321120262146px 10.017241477966309px 0px #6B728009",
        "0px 9.94853401184082px 24.117658615112305px 0px #6B72800C",
        "0px 33px 80px 0px #6B728012",
      ],
    },
    fontSize: customFontSizes,
    colors: {
      ...customColors,
      inherit: colors.inherit,
      white: colors.white,
      transparent: colors.transparent,
    },
    extend: {
      fontFamily: {
        display: ["Cambon", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        "8xl": "83rem",
        "9xl": "90rem",
      },
    },
    variants: {
      opacity: ({ after }) => after(["disabled"]),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
