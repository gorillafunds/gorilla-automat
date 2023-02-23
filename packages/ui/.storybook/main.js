const path = require("path")
const dotenv = require("dotenv")

// load global .env
const dotenvPath = path.join(__dirname, "..", "..", "..", ".env")
dotenv.config({ path: dotenvPath })

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
    MINTBASE_API_KEY: process.env.MINTBASE_API_KEY,
    AWS_KEY: process.env.AWS_KEY,
    AWS_SECRET: process.env.AWS_SECRET,
    AWS_REGION_NAME: process.env.AWS_REGION_NAME,
  }),
}
