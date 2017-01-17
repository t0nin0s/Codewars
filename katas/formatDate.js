/**
* Write a function that converts user entered date formatted as M/D/YYYY to
* a format required by an API (YYYYMMDD). The parameter "userDate" and the
* return value are strings.
* @param {String} userDate
* @return {String} formattedDate
*/

function formatDate(userDate) {
  var [ month,day,year ] = userDate.split('/');
  if (day < 10){ day = '0'.concat(day.toString()) }
  if (month < 10){ month = '0'.concat(month.toString()) }

  return year.concat(month,day);
}

module.exports = formatDate;
