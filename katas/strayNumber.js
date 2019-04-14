function strayNumber(arrayOfNumbers) {
  let sorted = arrayOfNumbers.sort((a, b) => a - b);
  let unique = Number(
    sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0]
  );
  return unique;
}

module.exports = strayNumber;
