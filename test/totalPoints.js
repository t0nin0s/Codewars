var assert = require("assert");
var points = require("../katas/totalpoints");

describe("ensure totalPoints", function() {
  it("sums +3, 1 or nil ", function() {
    assert.equal(points(["3:1", "2:3", "1:1", "0:0", "19:0"]), "8");
  });
});
