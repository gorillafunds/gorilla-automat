/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@gorilla-automat/ui",
  "@gorilla-automat/domain",
])
const dotenv = require("dotenv")
const path = require("path")

// load global .env
const dotenvPath = path.join(__dirname, "..", ".env")
dotenv.config({ path: dotenvPath })

module.exports = withTM({
  reactStrictMode: true,
  env: {
    GORILLA_API_URL: process.env.GORILLA_API_URL,
    MINTBASE_API_KEY: process.env.MINTBASE_API_KEY,
    AWS_KEY: process.env.AWS_KEY,
    AWS_SECRET: process.env.AWS_SECRET,
    AWS_REGION: process.env.AWS_REGION,
  },
  images: {
    domains: ["cdn.sanity.io", "arweave.net"],
    dangerouslyAllowSVG: true,
  },
})
