var assert = require('assert');
var followingSecond = require('../katas/followingSecond');

describe('followingSecond unit test', function(){
  it('only seconds change', function(){
    assert.equal(followingSecond('1,1,1'), "time is 1 hours: 1 minutes : 2 seconds");
});

  it('case midnight', function(){
    assert.equal(followingSecond('59,59,23'), " time is 0 hours: 0 minutes : 0 seconds");
  })

  it('case minute forward', function(){
    assert.equal(followingSecond('59,1,1'), "time is 1 hours: 2 minutes : 0 seconds");
  })
});

