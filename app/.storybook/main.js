const dotenv = require("dotenv")

dotenv.config({ path: "../.env" })

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  env: (config) => ({
    ...config,
    GORILLA_API_URL: process.env.GORILLA_API_URL,
  }),
}
