function ransomNote (magazine, ransom) {
  let magazineCounter = magazine.reduce((prev, curr, index) => {
    if (prev.hasOwnProperty(curr)) {
      prev[curr] += 1
    } else {
      prev[curr] = 1
    }
    return prev
  }, {})
  let note = ransom.reduce((prev, curr) => {
    if (!magazineCounter[curr]) {
      prev = 'No'
    } else {
      magazineCounter[curr] -= 1
      if (magazineCounter[curr] === 0) {
        delete magazineCounter[curr]
      }
    }
    return prev
  }, 'Yes')
  return note
}

module.exports = ransomNote
