function balancedBrackets (data) {
  let array = data.split('').reduce((array, curr, index) => {
    if (isOpenBracket(curr)) {
      array.push(curr)
      return array
    } else {
      if (matches(array[array.length - 1], curr)) {
        array.pop()
      } else {
        array.push(curr)
      }
      return array
    }
  }, [])
  if (array.length > 0) {
    return 'NO'
  } else {
    return 'YES'
  }
}

function isOpenBracket (char) {
  let str = '{[('
  if (str.indexOf(char) > -1) {
    return true
  } else {
    return false
  }
}

function matches (open, close) {
  let openingBracket = '{[('
  let closingBrackets = '}])'

  if (openingBracket.indexOf(open) === closingBrackets.indexOf(close)) {
    return true
  } else {
    return false
  }
}

module.exports = balancedBrackets
