/**
* Write a function that converts user entered date formatted as M/D/YYYY to
* a format required by an API (YYYYMMDD). The parameter "userDate" and the
* return value are strings.
* @param {String} userDate
* @return {String} formattedDate
*/

function prefixSet (data) {
  let set = data.reduce((object, value, index) => {
    if (!object.hasOwnProperty(value)) {
      object[value] = index
      object.coveringPrefix = index
    }
    return object
  }, {})
  return set.coveringPrefix
}

module.exports = prefixSet
