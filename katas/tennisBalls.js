
function tennisBalls(detritus) {
  const balls = detritus.reduce((acc, value) => {
    if (value === 58) { return acc += value }
    return acc;
  }, 0)
  return { weight: balls };
}

module.exports = tennisBalls;
