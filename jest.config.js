/** @type {import('jest').Config} */
export default {
  rootDir: 'src',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/**/*.test.ts'
  ],
  transform: {
    '^.+\\.(t|j|mj)sx?$': [ 'babel-jest', {
      presets: [
        [ '@babel/preset-env', { targets: { node: 'current' } } ],
        '@babel/preset-typescript'
      ],
      plugins: [
        [ '@babel/plugin-proposal-decorators', { version: '2023-11' } ]
      ]
    } ]
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json' ],
  extensionsToTreatAsEsm: [ '.ts', '.tsx' ],
  coverageProvider: 'v8',
  coverageReporters: [
    'text',
    'lcov'
  ],
  coverageDirectory: '../coverage',
  collectCoverage: true,
  reporters: [
    'default'
  ]
}
