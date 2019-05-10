var assert = require("assert");
var whoseBicycle = require("../katas/whoseBicycle");

const marks1 = {
  algebra: 0,
  history: 7,
  physics: 8,
  geography: 4,
  chemistry: 10
};

const marks2 = {
  algebra: 1000,
  history: 0,
  physics: 8,
  geography: 9,
  chemistry: 4
};

const marks3 = {
  algebra: 3000,
  history: 0,
  physics: 0,
  geography: 9,
  chemistry: 0
};

describe.only("whoseBicycle", () => {
  it("should tell which son will get the cycle", () => {
    assert.equal(
      whoseBicycle(marks1, marks2, marks3),
      "I will buy a cycle to my third son"
    );
  });
  it("should not accept strings", () => {
    assert.equal(whoseBicycle("a", marks2, "c"), "strings not accepted");
  });
});
