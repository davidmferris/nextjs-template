module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testTimeout: 30000,
  roots: ['<rootDir>'], // Specify root directory for tests
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)', // Files in `__tests__` directories
    '**/?(*.)+(spec|test).[tj]s?(x)', // Files ending in `.spec.js` or `.test.js`
  ],
};
