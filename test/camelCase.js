var assert = require('assert')
var camelCase = require('../katas/camelCase')

describe('camel Case', function () {
  describe('1st set of tests', function () {
    it('should return index 3', function () {
      assert.equal(camelCase('thisIsIt'), 3)
    })
    it('should return index 5', function () {
      assert.equal(camelCase('YouSureThisIsIt'), 5)
    })
  })
})
