const { basename } = require('path');

const getNameFromPath = (path) => {
  const FILE = basename(path).split('.').slice(0, -1).join('-');

  if (FILE !== '' && FILE !== 'index') {
    return FILE;
  }

  return basename(path);
}

module.exports = { getNameFromPath };
