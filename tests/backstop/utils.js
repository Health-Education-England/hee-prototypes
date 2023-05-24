/**
 * Utility functions used for generating config files.
 */

const fs = require('fs');
const glob = require('glob');

/**
 * Returns an array of scenario file includes.
 *
 * @return {string[]} Array containing scenario objects.
 */
const getScenarioIncludes = () => {
  let includePaths = glob.globSync('./tests/backstop/scenarios/*.js');

  if (includePaths.length === 0) {
    throw new Error('No scenario includes found.')
  }

  includePaths = includePaths.map(path => {
    path = path.split('/');
    path = path.pop();
    path = path.split('.');
    return path[0];
  })

  return includePaths.sort();
}

/**
 * Generates scenarios array for JSON config.
 *
 * @param  {string} host        Hostname for test server.
 * @param  {string} scenarioId          Scenario scenarioId.
 * @param  {string} pathPattern Glob pattern for block html files.
 *
 * @return {Object[]} Array containing scenario objects.
 */
const generateScenariosArray = (host, scenarioId, pathPattern) => {
  let scenarios = [];

  let filePaths = glob.globSync(pathPattern);
  filePaths.sort();

  filePaths.forEach(path => {
    // Split path string into array.
    path = path.split('/');

    // Throw error if scenario scenarioId does not exist in filepath pattern.
    if (path.indexOf(scenarioId) === -1) {
      throw new Error('Scenario scenarioId of "' + scenarioId + '" not found in filepath pattern: "' + pathPattern + '"');
    }

    const directoryIndex = path.indexOf(scenarioId);

    let urlPath = '/';
    for (let i = directoryIndex; i < path.length; i++) {
      urlPath += path[i] + '/';
    }

    // Remove trailing slash.
    urlPath = urlPath.slice(0, -1);

    // Format scenario name.
    let name = path[path.length - 1];
    name = name.split('.');
    name = scenarioId + '-' + name[0];

    let config = {
      label: name,
      url: host + urlPath
    }

    scenarios.push(config);
  })

  return scenarios;
}

/**
 * Merges manual scenario override with auto generated scenarios array.
 *
 * @param  {Object[]} scenarios Array of auto generated scenario objects.
 * @param  {Object[]} overrides Array of manually overridden scenarios.
 *
 * @return {Object[]} Array containing merged array of scenario objects.
 */
const applyScenarioOverrides = (scenarios, overrides) => {
  overrides.forEach(override => {
    scenarios.find((o, index) => {
      if (o.label === override.label) {
        scenarios[index] = {...o, ...override}
        return true;
      }
    });
  })

  return scenarios;
}

/**
 * Writes config objects for BackstopJS to JSON file.
 *
 * @param {string} path Path to config file output.
 * @param {Object} data JS object to write to JSON file.
 *
 */
const writeConfigFile = (path, data) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  getScenarioIncludes,
  generateScenariosArray,
  applyScenarioOverrides,
  writeConfigFile,
}
