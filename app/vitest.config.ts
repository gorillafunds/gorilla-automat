/// <reference types="vitest" />
import { defineConfig } from "vite"
import dotenv from "dotenv"

dotenv.config({
  path: ".env.local",
})

export default defineConfig({
  test: {
    setupFiles: ["./setupVitest.ts"],
  },
})
