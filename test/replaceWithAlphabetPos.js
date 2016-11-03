var assert = require('assert');
var alphabetPosition = require('../replaceWithAlphabetPos');

describe('Replace With Alphabet Positions', function() {
  describe('1st set of tests', function() {
    it('should return 1 2 3 three times', function() {
      assert.equal(alphabetPosition('   abc    abc abc    '), "1 2 3 1 2 3 1 2 3");
    });

  });
});
