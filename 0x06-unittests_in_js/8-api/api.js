const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from the API!' });
});

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = server;
