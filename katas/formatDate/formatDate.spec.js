var assert = require('assert');
var formatDate = require('./formatDate');

describe('formatDate function Testing', function() {
  it('Two-digit month and day', function() {
    assert.equal(formatDate('12/31/2014'), "20141231");
  });

  it("One-digit day", function() {
    assert.equal(formatDate('12/5/2016'), "20161205");
  });

  it('One-digit month', function() {
    assert.equal(formatDate("2/10/2016"), "20160210");
  });
});
