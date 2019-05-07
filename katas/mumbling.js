function mumbling(str) {
  if (!isNaN(str)) throw new Error("no numbers allowed");
  const a = str.toUpperCase().split("");
  const wildcard = "-";
  const timesIdx = a.reduce((acc, curr, currIdx) => {
    const rep = curr.repeat(currIdx).toLowerCase();
    return `${acc}${wildcard}${curr}${rep}`;
  });
  return timesIdx;
}

module.exports = mumbling;
