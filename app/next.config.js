/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@gorilla-automat/ui",
  "@gorilla-automat/domain",
])
const dotenv = require("dotenv")

dotenv.config()

module.exports = withTM({
  reactStrictMode: true,
  env: {
    GORILLA_API_URL: process.env.GORILLA_API_URL,
    MINTBASE_API_KEY: process.env.MINTBASE_API_KEY,
  },
  images: {
    domains: ["cdn.sanity.io", "arweave.net"],
    dangerouslyAllowSVG: true,
  },
})
