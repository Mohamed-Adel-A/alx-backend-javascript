const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Cart page', function() {
  it('should return status code 200 and correct message when :id is a number', function(done) {
    request.get('http://localhost:7865/cart/123', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return status code 404 when :id is NOT a number', function(done) {
    request.get('http://localhost:7865/cart/hello', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return status code 404 when :id is a negative number', function(done) {
    request.get('http://localhost:7865/cart/-123', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return status code 404 when :id is zero', function(done) {
    request.get('http://localhost:7865/cart/0', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return status code 404 when :id is not provided', function(done) {
    request.get('http://localhost:7865/cart/', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  // Add more tests for other edge cases if needed
});
