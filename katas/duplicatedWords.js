function removeDuplicateWords(s) {
  let wordsArray = s.split(" ");
  let unique = [...new Set(wordsArray)];
  return unique.join(" ");
}

module.exports = removeDuplicateWords;
