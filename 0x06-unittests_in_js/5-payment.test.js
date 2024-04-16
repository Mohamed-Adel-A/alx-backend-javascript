const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;

  beforeEach(function() {
    // Create a spy for console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the spy
    consoleLogSpy.restore();
  });

  it('should log the correct message and console should be called once with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct message and console should be called once with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});
