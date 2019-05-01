var assert = require("assert");
var highestAndLowest = require("../katas/highestAndLowest");

describe("high and low numbers", function() {
  it("should return highest and lowest numbers", function() {
    assert.equal(
      highestAndLowest("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"),
      "542 -214"
    );
  });

  it("should return highest and lowest numbers", function() {
    assert.equal(highestAndLowest("-1 -2 -3 -4"), "-1 -4");
  });
});
