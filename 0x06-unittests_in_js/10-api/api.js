const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Route for GET /
app.get('/', function (req, res) {
  res.send('Welcome to the payment system');
});

// Route for GET /cart/:id
app.get('/cart/:id(\\d+)', function (req, res) { // Regex to accept only numbers for :id
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Route for GET /available_payments
app.get('/available_payments', function(req, res) {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(paymentMethods);
});

// Route for POST /login
app.post('/login', function(req, res) {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
});

app.listen(7865, function () {
  console.log('API available on localhost port 7865');
});

module.exports = app;
