var assert = require('assert')
var ransomNote = require('./ransomNote')

describe('ransom Note', function () {
  describe('1st set of tests', function () {
    it('should return Yes', function () {
      assert.equal(ransomNote(
        ['give', 'me', 'one', 'grand', 'today', 'night'],
        ['give', 'one', 'grand', 'today']),
      'Yes')
    })

    it('should return No', function () {
      assert.equal(ransomNote(
        ['give', 'me', 'one', 'grand', 'today', 'night'],
        ['give', 'one', 'grand', 'today', 'today']),
      'No')
    })
  })
})
