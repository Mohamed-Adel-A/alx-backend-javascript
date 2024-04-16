const request = require('request');
const chai = require('chai');
const expect = chai.expect;

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

  // Add other tests if needed
}); 
