var assert = require("assert");
var strayNumber = require("../katas/strayNumber");

describe.only("stray number", function() {
  it("should return the unique number", function() {
    assert.equal(strayNumber([1, 1, 2, 1, 1]), 2);
  });
  it("should return negative unique number", function() {
    assert.equal(strayNumber([-2, -1, -1, -1, -1]), -2);
  });
  it("should not accept strings", function() {
    assert.throws(strayNumber, Error, "Strings not valid");
  });
});
