/* eslint-disable */
export default {
  displayName: 'frontend',
  preset: '../../jest.preset.js',
  globals: {
    NODE_ENV: 'test'
  },
  testEnvironment: 'jsdom',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/common-ui',
  setupFilesAfterEnv: ['./jest.setup.ts']
};
