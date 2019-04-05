var assert = require("assert");
var duplicatedWords = require("../katas/duplicatedWords");

describe.only("duplicated words", function() {
  it("should remove duplicated words", function() {
    assert.equal(
      duplicatedWords("alpha beta beta gamma delta beta gamma"),
      "alpha beta gamma delta"
    );
  });
  it("should return string if no duplicates", function() {
    assert.equal(
      duplicatedWords("alpha beta gamma delta"),
      "alpha beta gamma delta"
    );
  });
  it("should return input if only one word", function() {
    assert.equal(duplicatedWords("123"), "123");
  });
  it("should return empty space if empty string", function() {
    assert.equal(duplicatedWords(""), "");
  });
});
