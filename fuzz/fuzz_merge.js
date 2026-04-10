const { FuzzedDataProvider } = require('@jazzer.js/core');
const _ = require('lodash');

module.exports.fuzz = function (data) {
  const provider = new FuzzedDataProvider(data);
  try {
    const obj1 = JSON.parse(provider.consumeString(200));
    const obj2 = JSON.parse(provider.consumeString(200));
    if (typeof obj1 === 'object' && obj1 !== null &&
        typeof obj2 === 'object' && obj2 !== null) {
      _.merge({}, obj1, obj2);
    }
  } catch (e) {
    // Expected errors from malformed input
  }
};
