/// <reference types="vitest" />
import { defineConfig } from "vite"
import dotenv from "dotenv"

dotenv.config()

export default defineConfig({
  assetsInclude: "**/*.zip",
  test: {
    setupFiles: ["./setupVitest.ts"],
    environment: "happy-dom",
  },
})
