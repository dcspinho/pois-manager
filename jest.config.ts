module.exports = {
  preset: 'ts-jest',

  verbose: true,

  testEnvironment: 'node',

  transform: {
    '^.+\\.ts$': 'ts-jest',
  },

  testMatch: ['**/tests/**/*.test.ts'],

  clearMocks: true,

  globals: {
    'ts-jest': {
      isolatedModules: true, // Avoid issues with isolatedModules in TypeScript
    },
  },
};
