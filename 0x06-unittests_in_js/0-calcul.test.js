const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of two rounded numbers', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return the sum of the first number rounded and the second number rounded', function() {
    assert.strictEqual(calculateNumber(1.3, 3), 4);
    assert.strictEqual(calculateNumber(1.7, 3), 5);
    assert.strictEqual(calculateNumber(1.7, 3.2), 5);
    assert.strictEqual(calculateNumber(1.7, 3.5), 6);
  });
});
