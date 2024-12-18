module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/cypress/'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
};
