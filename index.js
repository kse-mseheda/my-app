const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Hello World' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
}); // Health check endpoint

if (require.main === module) {
  app.listen(port, () => console.log(`Listening on port ${port}`));
} // Only start the server if this file is run directly, not when imported for testing

module.exports = app; // Export the app for testing purposes