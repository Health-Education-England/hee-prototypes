/**
 * Generates BackstopJS scenarios array covering HEE prototype content blocks.
 */

const id = 'blocks';
const pathPattern = './app/views/blocks/**/examples/*.html';

// Add extra attributes manually to specific scenarios here.
const overrides = [
  {
    label: 'blocks-main-google-map',
    delay: 5000
  }
];

module.exports = { id, pathPattern, overrides };
