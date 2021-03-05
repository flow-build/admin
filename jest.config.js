module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.js(x)?',
    'src/pages/**/*.js(x)?',
    '!src/assets/**/*.js(x)',
    '!src/contexts/**/*.js(x)',
    '!src/routes/**/*.js(x)',
    '!src/services/**/*.js(x)',
    '!src/utils/**/*.js(x)'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/assetsTransformer.js'
  }
}
