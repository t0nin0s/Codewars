var assert = require("assert");
var strayNumber = require("../katas/strayNumber");

describe("stray number", function() {
  it("should return the unique number", function() {
    assert.equal(strayNumber([1, 1, 2, 1, 1]), 2);
  });
  it("should return negative unique number", function() {
    assert.equal(strayNumber([-2, -1, -1, -1, -1]), -2);
  });
});
