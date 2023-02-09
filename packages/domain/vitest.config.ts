/// <reference types="vitest" />
import { defineConfig } from "vite"
import dotenv from "dotenv"
import path from "path"

// load global .env
const dotenvPath = path.join(__dirname, "..", "..", ".env")
dotenv.config({ path: dotenvPath })

export default defineConfig({
  test: {
    setupFiles: ["./setupVitest.ts"],
    environment: "happy-dom",
    globals: true,
  },
})
