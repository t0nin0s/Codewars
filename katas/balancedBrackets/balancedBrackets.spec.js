var assert = require('assert')
var balancedBrackets = require('./balancedBrackets')

describe('Balanced Brackets', function () {
  describe('1st set of tests', function () {
    it('should return index YES', function () {
      assert.equal(balancedBrackets('{[()]}'), 'YES')
    })
    it('should return index NO', function () {
      assert.equal(balancedBrackets('{{]}}'), 'NO')
    })
  })
})
