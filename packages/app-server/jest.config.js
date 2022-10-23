/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globalTeardown: "<rootDir>/jest-globals-teardown.ts",
};
