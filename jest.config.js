module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['json', 'lcov'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  roots: ['src'],
  setupFiles: ['<rootDir>/jest/setup.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(j|t)sx?$',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
};
