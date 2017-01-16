var assert = require('assert');
var ensure = require('../katas/ensure');

describe('ensure function Testing', function() {
  it('Should throw error no arguments found', function() {
    assert.throws(ensure, Error, "No arguments found");
  });

  it("Should throw error argument undefined", function() {
    var value;
    assert.throws(ensure, Error, "Argument not defined");
  });

  it('Should return the argument value', function() {
    var value = 2;
    assert.equal(ensure(value), "2");
  });
});
