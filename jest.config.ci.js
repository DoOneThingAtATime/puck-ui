// https://jestjs.io/docs/zh-Hans/configuration
const base = require('./jest.config')

module.exports = Object.assign({}, base, {
  reporters: ['jest-junit'],
  collectCoverage: true,
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  // collectCoverageFrom: ["{lib, include}/**/*.{ts, tsx}", "!**/node_modules/**"],
})
