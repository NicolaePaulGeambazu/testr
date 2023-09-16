module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testEnvironment: "jest-environment-jsdom",
  // Additional Jest configuration options
  verbose: true, // Display detailed test output
  testMatch: ["**/__tests__/**/*.test.(js|jsx|ts|tsx)"], // Specify test file patterns
  moduleNameMapper: {
    // Configure module name mappings (e.g., for CSS or other assets)
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  // Other Jest configuration options go here
};
