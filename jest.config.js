module.exports = {
  verbose: true,
  transform: {
    '\\.js$': 'babel-jest',
    '\\.jsx$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverage: true
};
