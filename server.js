const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  const host = req.headers.host || '';
  
  if (host.startsWith('www.')) {
    const newHost = host.replace(/^www\./, '');
    const redirectUrl = `https://${newHost}${req.originalUrl}`;
    return res.redirect(301, redirectUrl);
  }
  
  next();
});

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.use(express.static('.', {
  extensions: ['html'],
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css') || filePath.endsWith('.js') || 
        filePath.endsWith('.png') || filePath.endsWith('.jpg') || 
        filePath.endsWith('.ico') || filePath.endsWith('.woff2')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  }
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/confirmation', (req, res) => {
  res.sendFile(path.join(__dirname, 'confirmation.html'));
});

app.get('/aboutus', (req, res) => {
  res.sendFile(path.join(__dirname, 'aboutus.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
