const express = require('express');
const app = express();

// Route for GET /
app.get('/', function (req, res) {
  res.send('Welcome to the payment system');
});

// Route for GET /cart/:id
app.get('/cart/:id(\\d+)', function (req, res) { // Regex to accept only numbers for :id
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.listen(7865, function () {
  console.log('API available on localhost port 7865');
});

module.exports = app;
