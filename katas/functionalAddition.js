function functionalAddition(n) {
  if (isNaN(n)) throw "first param is not a number";
  return function(numero) {
    if (!isNaN(numero)) {
      return numero + n;
    } else {
      throw "second param is not a number";
    }
  };
}

module.exports = functionalAddition;
