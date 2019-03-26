function sumIntegers(n) {
  var sum = 0;

  if (Number.isInteger(n) && n > 0) {
    for (var i = 0; i <= n; i++) {
      let iteration = i;
      sum += iteration;
    }
    return sum;
  } else {
    return false;
  }
}

module.exports = sumIntegers;
