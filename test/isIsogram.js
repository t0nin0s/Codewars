var assert = require("assert");
var isIsogram = require("../katas/isIsogram");

describe("IsIsogram", () => {
  it("should pass", () => {
    assert.equal(isIsogram("Dermatoglyphics"), true);
  });

  it("should fail", () => {
    assert.equal(isIsogram("aba"), false);
  });
});
