var assert = require('assert');
var maxPossibleScore = require('../katas/maxPossibleScore')

describe.only('maxPossibleScore', () => {
  it("should return 30", () => {
    assert.equal(maxPossibleScore({ "a": 2, "b": 5, "c": 8 }, ["a", "b", "c"]), "30")
  })
  it("should return 25", () => {
    assert.equal(maxPossibleScore({ "a": 2, "b": 5, "c": 8 }, ["a", "c"]), "25")
  })
  it("should return 15", () => {
    assert.equal(maxPossibleScore({ "a": 2, "b": 5, "c": 8 }, []), "15")
  })
})