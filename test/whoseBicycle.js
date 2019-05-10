var assert = require("assert");
var whoseBicycle = require("../katas/whoseBicycle");

const lowest = {
  algebra: 0,
  history: 7,
  physics: 8,
  geography: 4,
  chemistry: 10
};

const medium = {
  algebra: 1000,
  history: 0,
  physics: 8,
  geography: 9,
  chemistry: 4
};

const highest = {
  algebra: 3000,
  history: 0,
  physics: 0,
  geography: 9,
  chemistry: 0
};

describe("whoseBicycle", () => {
  it("first son will get the bike", () => {
    assert.equal(
      whoseBicycle(highest, medium, lowest),
      "I will buy a cycle to my first son"
    );
  });
  it("second son will get the bike", () => {
    assert.equal(
      whoseBicycle(lowest, highest, medium),
      "I will buy a cycle to my second son"
    );
  });
  it("third son will get the bike", () => {
    assert.equal(
      whoseBicycle(lowest, medium, highest),
      "I will buy a cycle to my third son"
    );
  });
  it("third son will get the bike if same marks", () => {
    assert.equal(
      whoseBicycle(lowest, highest, highest),
      "I will buy a cycle to my third son"
    );
  });
});
