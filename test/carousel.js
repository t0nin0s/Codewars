var assert = require("assert");
var carousel = require("../katas/carousel");

describe("carousel", function() {
  it("should return turn number 10", function() {
    assert.equal(carousel(10), "this is turn number 10");
  });
});
