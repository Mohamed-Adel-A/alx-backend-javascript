const express = require('express');

const app = express();

app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  if (/^\d+$/.test(id)) {
    res.status(200).send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Invalid cart ID');
  }
});

const server = app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = server;
