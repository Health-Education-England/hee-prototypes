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
 * @param {string} pathPattern     Glob pattern for block html files.
 * @param {number} directoryIndex  Start index for directory pattern.
 *
 */
const generateScenarios = (pathPattern, directoryIndex) => {
  let scenarios = [];
  let filePaths = glob.globSync(pathPattern);

  filePaths.map(path => {
    // Split path string into array.
    path = path.split('/');

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
      url: urlPath
    }

    scenarios.push(config);
  })

  return scenarios;
}

module.exports.writeConfigFile = writeConfigFile;
module.exports.generateScenarios = generateScenarios;
