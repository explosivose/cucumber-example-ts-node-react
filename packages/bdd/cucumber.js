const common = [
  // disable message about publishing to cucumber.io
  // (publishing will be done in bitbucket-pipelines)
  `--publish-quiet`,
  // import config & setup files
  `--require cucumber.setup.js`,
  `--require support/types.ts`,
  `--require support/mocks.ts`,
  `--require support/world.ts`,
  // import test steps
  `--require stepDefinitions/**/*.ts`,
];

module.exports = {
  default: `${common.join(' ')}`
};
