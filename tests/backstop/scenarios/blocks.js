/**
 * Generates BackstopJS scenarios array covering HEE prototype content blocks.
 */

const fs = require('fs');
const glob = require('glob');

let scenarios = [];
let filePaths = glob.globSync('../../app/views/blocks/**/examples/*.html');

filePaths = filePaths.map(path => {
  // Split path string into array.
  path = path.split('/');

  let urlPath = '/';
  for (let i = 4; i < path.length; i++) {
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

  return filePaths;
})

module.exports = scenarios
