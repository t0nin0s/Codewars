var assert = require("assert");
var sumIntegers = require("../katas/sumIntegers");

describe("ensure sums Integers", function() {
  it("add numbers from 0 to n", function() {
    assert.equal(sumIntegers(100), "5050");
  });
  it("returns false if negative number", function() {
    assert.equal(sumIntegers(-100), false);
  });
  it("returns false if argument is NaN", function() {
    assert.equal(sumIntegers("a"), false);
  });
});
