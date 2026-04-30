const express = require('express');
const proxy = require('./api/proxy'); // proxy.js 파일 경로

const app = express();
const port = 3000;

app.get('/api/proxy', proxy);

app.listen(port, () => {
  console.log(`Local proxy server listening at http://localhost:${port}`);
});