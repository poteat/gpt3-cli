module.exports = {
  roots: ["<rootDir>"],
  testMatch: ["**/*.spec.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  collectCoverage: true,
  verbose: true
};
