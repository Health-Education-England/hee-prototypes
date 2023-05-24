/**
 * Generates BackstopJS config file by including scenarios dynamically.
 */

const utils = require('./utils');
const baseConfig = require('./config/base.json');
const blocks = require('./scenarios/blocks');

const TEST_HOST = 'http://localhost:3000';

let blockScenarios = [];

try {
  blockScenarios = utils.generateScenarios(TEST_HOST, blocks.id, blocks.pathPattern);
} catch (e) {
  console.error(e);
  return;
}

baseConfig.scenarios = blockScenarios;

utils.writeConfigFile('./tests/backstop/config/backstop.json', baseConfig);
