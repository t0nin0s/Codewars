var assert = require("assert");
var reverseNumber = require("../katas/reverseNumber");

describe("reverseNumber", function() {
  it("should return reversed number", function() {
    assert.equal(reverseNumber("123"), "321");
  });
  it("should keep number sign ", function() {
    assert.equal(reverseNumber("-2345"), "-5432");
  });
  it("should throw error if NaN", function() {
    assert.throws(
      () => {
        reverseNumber("ahah");
      },
      Error,
      "error"
    );
  });
});
