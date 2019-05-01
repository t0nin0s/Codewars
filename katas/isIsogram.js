function isIsogram(str) {
  const arrayIsogram = str.toLowerCase().split("");
  let result = arrayIsogram.reduce((acc, curr, currIdx) => {
    if (acc === false) return acc;
    else if (arrayIsogram.lastIndexOf(curr) > currIdx) acc = false;
    else acc = true;

    return acc;
  }, true);
  return result;
}

module.exports = isIsogram;
