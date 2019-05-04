var assert = require("assert");
var mumbling = require("../katas/mumbling");

describe("mumbling", function() {
  it("should return mumbles", function() {
    assert.equal(mumbling("abcd"), "A-Bb-Ccc-Dddd");
  });

  it("should not accept numbers", function() {
    assert.throws(
      () => {
        mumbling("1234");
      },
      Error,
      "Error"
    );
  });
});
