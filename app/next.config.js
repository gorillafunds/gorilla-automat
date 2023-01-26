/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@gorilla-automat/ui"])

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "arweave.net"],
    dangerouslyAllowSVG: true,
  },
})
