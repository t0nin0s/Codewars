var assert = require('assert');

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
