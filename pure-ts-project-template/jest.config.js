module.exports = {
  testEnvironment: "node",
  testRegex: "(__tests__/.*|(\\.|/)(test|spec))\\.ts$",
  transform: {
    "^.*\\.ts": "ts-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  coverageDirectory: "output/coverage/jest",
  coverageReporters: ["html", "text"]
};
