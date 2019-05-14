function maxPossibleScore(obj, arr) {
  return Object.keys(obj).reduce((acc, key) => {
    const val = obj[key]
    return acc + (arr.includes(key) ? (val * 2) : val)
  }, 0)
}



module.exports = maxPossibleScore;


