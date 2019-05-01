var assert = require("assert");
var maskify = require("../katas/maskify");

describe("maskify", function() {
  it("should return masked characthers", function() {
    assert.equal(maskify("34dskdfjal"), "######fjal");
  });
  it("should not mask if arg.length <=4", function() {
    assert.equal(maskify("123"), "123");
  });
});
