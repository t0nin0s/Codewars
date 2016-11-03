var assert = require('assert');

var alphabetPosition = function (text) {
  var alphabet = ['a','b','c'];
  var stringText = text.replace(/ /g,"").split('')
                      .map(function(char){
                        console.log("char is: "+char);
                        return alphabet.indexOf(char)+1;
                      }).join(' ');
  console.log("new string is: " + stringText);
  return stringText;
}

module.exports = alphabetPosition;
