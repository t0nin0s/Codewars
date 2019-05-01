function highestAndLowest(numbers) {
  let sorted = numbers.split(" ").sort((a, b) => a - b);
  let highest = sorted[sorted.length - 1];
  let lowest = sorted[0];
  let result = `${highest} ${lowest}`;

  return result;
}

module.exports = highestAndLowest;
