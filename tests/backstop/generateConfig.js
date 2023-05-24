/**
 * Generates BackstopJS config file by including scenarios dynamically.
 */

const TEST_HOST = 'http://localhost:3000';

const utils = require('./utils');
const baseConfig = require('./config/base.json');

let scenarioIncludes = [];

// Attempt to load list of scenario include files.
try {
  scenarioIncludes = utils.getScenarioIncludes();
} catch (e) {
  console.error(e);
  return;
}

let scenarioData = [];

// Dynamically require scenario include files and generate scenario arrays.
scenarioIncludes.forEach(includeFile => {
  const scenario = require('./scenarios/' + includeFile);

  let scenarios = [];

  try {
    scenarios = utils.generateScenariosArray(TEST_HOST, scenario.id, scenario.pathPattern);
  } catch (e) {
    console.error(e);
    return;
  }

  scenarioData = scenarioData.concat(scenarios);
})

// Amend the base config object with dynamic scenarios.
baseConfig.scenarios = scenarioData;

// Output new backstop config to json file.
utils.writeConfigFile('./tests/backstop/config/backstop.json', baseConfig);
