var assert = require("assert");
var functionalAddition = require("../katas/functionalAddition");

describe("functionalAddition adds n to any number", function() {
  it("should return n plus number", function() {
    assert.equal(functionalAddition(2)(2), 4);
  });
  it("should accept only numbers", function() {
    assert.throws(
      () => {
        functionalAddition("aha")(2);
      },
      Error,
      "Error"
    );
  });
});
