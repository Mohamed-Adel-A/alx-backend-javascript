const express = require('express');
const app = express();

app.get('/', function (request, response) { // Change route to '/'
  response.send('Welcome to the payment system');
});

app.listen(7865, function () {
  console.log('API available on localhost port 7865');
});

module.exports = app;
