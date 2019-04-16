function functionalAddition(n) {
  if (isNaN(n)) throw new Error("first param is not a number");
  return function(numero) {
    if (!isNaN(numero)) {
      return numero + n;
    } else {
      throw new Error("second param is not a number");
    }
  };
}

module.exports = functionalAddition;
