module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/bin", "<rootDir>/lib", "<rootDir>/helper"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
}
