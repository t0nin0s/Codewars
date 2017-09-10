var assert = require('assert')
var prefixSet = require('../katas/prefixSet')

describe('prefix Set', function () {
  describe('1st set of tests', function () {
    it('should return index 3', function () {
      assert.equal(prefixSet([2, 2, 1, 0, 1]), 3)
    })
    it('should return index 6', function () {
      assert.equal(prefixSet([3, 7, 1, 13, 1, 3, 8, 13, 3, 7, 8]), 6)
    })
    it('should return index 0', function () {
      assert.equal(prefixSet([1, 1, 1, 1, 1, 1, 1, '1', 1]), 0)
    })
  })
})
