/**
 * Generates BackstopJS config file by including scenarios dynamically.
 */

const fs = require('fs');

const baseConfig = require('./config/base.json');
const blockScenarios = require('./scenarios/blocks');

const writeConfigFile = (path, data) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

baseConfig.scenarios = blockScenarios;

writeConfigFile('./config/backstop.json', baseConfig);
