// enable typescript processing in cucumber-js
require('ts-node').register(require('./tsconfig.json'));
// enable jsdom in cucumber-js
require('global-jsdom')();
// polyfill window.fetch 
require('whatwg-fetch');

const path = require('path');
// svg stub for frontend, `import x from '*.svg'`
// (require.extensions is deprecated, but no straightforward
// alternative exists in nodejs, https://github.com/nodejs/node/issues/32483)
require.extensions['.svg'] = (module, filename) => {
  const name = path.basename(filename, '.svg').replace(/-/g, '');
  const content = `
    const React = require('react');
    const ${name} = (props) => {
      return React.createElement('svg', props);
    };
    module.exports.default = ${name};
    module.exports.ReactComponent = ${name};
  `;
  module._compile(content, filename);
};

require.extensions['.css'] = () => '';
