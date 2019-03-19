/**
* Modify the ensure function so that it throws an error if called without
* arguments or an argument is undefined. Otherwise it should return the
* given value.
* @param value
* @return error message or value
*/

function ensure(value) {
  if (arguments.length == 0) throw new Error ('No arguments found')
  if ( typeof value == 'undefined') throw new Error ('Argument not defined')
  return value;
}

module.exports = ensure;
