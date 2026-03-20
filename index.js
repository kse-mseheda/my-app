const express = require('express');
const _ = require('lodash');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Hello World' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// New feature: Data transformation endpoint
app.post('/transform', (req, res) => {
  const data = req.body || {};
  const transformed = _.mapKeys(data, (value, key) => _.camelCase(key));
  res.json({ transformed });
});

// New feature: Array utilities endpoint
app.post('/deduplicate', (req, res) => {
  const items = req.body?.items || [];
  const unique = _.uniq(items);
  res.json({ original: items, deduplicated: unique, count: unique.length });
});

// New feature: Object deep merge endpoint
app.post('/merge', (req, res) => {
  const obj1 = req.body?.obj1 || {};
  const obj2 = req.body?.obj2 || {};
  const merged = _.merge(obj1, obj2);
  res.json({ result: merged });
});

if (require.main === module) {
  app.listen(port, () => console.log(`Listening on port ${port}`));
} // Only start the server if this file is run directly, not when imported for testing

module.exports = app; // Export the app for testing purposes