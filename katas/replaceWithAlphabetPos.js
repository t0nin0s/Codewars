/**
* In this kata you are required to, given a string, replace every letter with
* its position in the alphabet. If anything in the text isn't a letter, ignore
* it and don't return it. a being 1, b being 2, etc.
* @param {String} text
* @return {String} translated
*/

var alphabetPosition = function (text) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return (text.replace(/[^a-zA-Z]/g, "")
              .toLowerCase()
              .split('')
              .map(function(char){
                return alphabet.indexOf(char)+1;
              }).join(' ')
  );
}

module.exports = alphabetPosition;
