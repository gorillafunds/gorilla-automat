module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/bin", "<rootDir>/lib"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
}
