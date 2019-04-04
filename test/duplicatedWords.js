var assert = require("assert");
var duplicatedWords = require("../katas/duplicatedWords");

describe("duplicated words", function() {
  it("should remove duplicated words", function() {
    assert.equal(
      duplicatedWords("alpha beta beta gamma delta beta gamma"),
      "alpha beta gamma delta"
    );
  });
});
