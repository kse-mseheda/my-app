const { FuzzedDataProvider } = require('@jazzer.js/core');
const _ = require('lodash');

module.exports.fuzz = function (data) {
  const provider = new FuzzedDataProvider(data);
  try {
    const input = {};
    const numKeys = provider.consumeIntegralInRange(0, 10);
    for (let i = 0; i < numKeys; i++) {
      const key = provider.consumeString(50);
      const value = provider.consumeString(100);
      input[key] = value;
    }
    _.mapKeys(input, (v, k) => _.camelCase(k));
  } catch (e) {
    // Expected errors from malformed input
  }
};
