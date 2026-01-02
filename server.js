const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

/**
 * Disable caching for HTML files
 */
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

/**
 * Serve static assets
 */
app.use(express.static(__dirname, {
  extensions: ['html'],
  setHeaders: (res, filePath) => {
    if (
      filePath.endsWith('.css') ||
      filePath.endsWith('.js') ||
      filePath.endsWith('.png') ||
      filePath.endsWith('.jpg') ||
      filePath.endsWith('.ico') ||
      filePath.endsWith('.woff2')
    ) {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  }
}));

/**
 * Routes
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/confirmation', (req, res) => {
  res.sendFile(path.join(__dirname, 'confirmation.html'));
});

app.get('/aboutus', (req, res) => {
  res.sendFile(path.join(__dirname, 'aboutus.html'));
});

/**
 * Fallback for SPA / unknown routes
 */
app.use((req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

/**
 * Start server
 */
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
