/**
 * Utility functions used for generating config files.
 */

const fs = require('fs');
const glob = require('glob');

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

/**
 * Generates scenario array for JSON config.
 *
 * @param  {string} host        Hostname for test server.
 * @param  {string} id          Scenario id.
 * @param  {string} pathPattern Glob pattern for block html files.
 *
 * @return {Object[]} Array containing scenario objects.
 */
const generateScenarios = (host, id, pathPattern) => {
  let scenarios = [];
  let filePaths = glob.globSync(pathPattern);

  filePaths.map(path => {
    // Split path string into array.
    path = path.split('/');

    // Throw error if scenario id does not exist in filepath pattern.
    if (path.indexOf(id) === -1) {
      throw new Error('Scenario id of "' + id + '" not found in filepath pattern: "' + pathPattern + '"');
    }

    const directoryIndex = path.indexOf(id);

    let urlPath = '/';
    for (let i = directoryIndex; i < path.length; i++) {
      urlPath += path[i] + '/';
    }

    // Remove trailing slash.
    urlPath = urlPath.slice(0, -1);

    // Format scenario name.
    let name = path[path.length - 1];
    name = name.split('.');
    name = 'block' + '-' + name[0];

    let config = {
      label: name,
      url: host + urlPath
    }

    scenarios.push(config);
  })

  return scenarios;
}

module.exports.writeConfigFile = writeConfigFile;
module.exports.generateScenarios = generateScenarios;
