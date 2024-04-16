const request = require('supertest');
const server = require('./api');

describe('GET /available_payments', () => {
  it('responds with payment methods', async () => {
    const response = await request(server).get('/available_payments');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
});

describe('POST /login', () => {
  it('responds with welcome message', async () => {
    const response = await request(server)
      .post('/login')
      .send({ userName: 'John' });
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome John');
  });
});

describe('Cart page', function() {
  it('should return status code 200 when :id is a number', function(done) {
    request.get('http://localhost:7865/cart/123', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return status code 404 when :id is NOT a number', function(done) {
    request.get('http://localhost:7865/cart/hello', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('Test for GET / returns “Welcome to the payment system” exists', function(done) {
    request.get('http://localhost:7865/', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return status code 200 and correct message when :id is a number', function(done) {
    request.get('http://localhost:7865/cart/123', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  // Add other tests if needed
}); 
