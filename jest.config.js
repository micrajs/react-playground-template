module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': 'esbuild-jest',
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.css$': '<rootDir>/EmptyModule.js',
  },
  runner: 'groups',
  testEnvironment: 'node',
  testRegex: 'src(/tests/|/.*/tests/).*\\.test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/.config/testing/setup.ts'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
};