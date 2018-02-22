module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/app/**/*.{js,jsx}'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['json', 'lcov'],
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$': '<rootDir>/jest/file-mock.js',
    '\\.(css|less|sass|scss|styl)$': 'identity-obj-proxy',
  },
  roots: ['src'],
  setupFiles: [
    '<rootDir>/jest/setup.js',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(js|jsx)$',
};
