function reverse(n) {
  if (isNaN(n)) throw new Error("param not a number");
  let reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return n < 0 ? -parseInt(reversed) : parseInt(reversed);
}

module.exports = reverse;
