/**
 * Generates BackstopJS config file by including scenarios dynamically.
 */

const utils = require('./utils');

const baseConfig = require('./config/base.json');
const blocks = require('./scenarios/blocks');

const blockScenarios = utils.generateScenarios(blocks.pathPattern, blocks.directoryIndex);
baseConfig.scenarios = blockScenarios;

utils.writeConfigFile('./config/backstop.json', baseConfig);
