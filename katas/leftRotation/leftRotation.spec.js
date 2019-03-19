var assert = require('assert')
var leftRotation = require('./leftRotation')

describe('Left Rotation', function () {
  describe('1st set of tests', function () {
    it('should return rotated 4 times', function () {
      assert.equal(
        leftRotation(
          [1, 2, 3, 4, 5], 4),
          '5 1 2 3 4'
         )
    })
  })
})
