module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
    'dist',
    'storybook',
    '.vscode',
    'coverage',
    'doc',
  ],
  moduleFileExtensions: ['js', 'json', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  // setupFiles: ['./setup-tests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/node_modules/jest-css-modules',
  },
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).(js|ts|tsx)'],
  testPathIgnorePatterns: [
    '\\\\node_modules\\\\',
    'dist',
    'storybook',
    '.vscode',
    'coverage',
    'doc',

    'src/assets',
    'src/components',
    'src/designSystem',
    'src/utils',
    'src/pages',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
