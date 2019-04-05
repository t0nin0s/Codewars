function sumPositives(number) {
  let sum = number
    .filter(x => x > 0)
    .reduce((acc, y) => {
      return acc + y;
    }, 0);
  return sum;
}

module.exports = sumPositives;
