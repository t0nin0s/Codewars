var assert = require("assert");
var sumPositives = require("../katas/sumPositives");

describe("sums numbers in array", function() {
  it("sums positive numbers", function() {
    assert.equal(sumPositives([-1, 2, 3]), 5);
  });
  it("case negative numbers equals 0", function() {
    assert.equal(sumPositives([-1, -1 - 4]), 0);
  });
  it("case not numbers", function() {
    assert.equal(sumPositives(["a", "b", "c"]), 0);
  });
});
