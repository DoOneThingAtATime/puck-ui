// https://jestjs.io/docs/zh-Hans/configuration

module.exports = {
  verbose: true,
  clearMocks: false,

  collectCoverage: true,
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
  // collectCoverageFrom: ["{lib, include}/**/*.{ts, tsx}", "!**/node_modules/**"],
  coverageDirectory: 'coverage',
  reporters: ['default'],
  coverageReporters: ['text', 'lcov'],
  // reporters: ['default', 'jest-junit'],
  
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
      "\\.(css|less|sass|scss)$": "<rootDir>/test/__mocks__/object-mock.js"
  },
  testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
  transform: {
      "^.+unit\\.(js|jsx)$": "babel-jest",
      "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
}