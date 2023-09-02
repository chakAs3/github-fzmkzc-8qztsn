const path = require('path');

// https://jestjs.io/docs/code-transformation#defaults
module.exports = {
  process(sourceText, sourcePath, options) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};
