var assert = require('assert');
var tennisBalls = require('../katas/tennisBalls')

const detritus = [58, 68, 62, 69, 58];

describe('tennisBalls', () => {
  it('the weight is 116', () => {
    assert.deepEqual(tennisBalls(detritus), { weight: 116 })
  })

  it('the weight is 0', () => {
    assert.deepEqual(tennisBalls([60, 66, 71, 68, 62]), { weight: 0 })
  })

  it('the weight is 174', () => {
    assert.deepEqual(tennisBalls([58, 58, 58]), { weight: 174 })
  })
})



