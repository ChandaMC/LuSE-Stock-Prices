module.exports = {
  // The root of your source code
  roots: ['<rootDir>/src'],

  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules', 'src'],

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module resolver
  modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
};