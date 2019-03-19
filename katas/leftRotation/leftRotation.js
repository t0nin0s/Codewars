function leftRotation (data, times) {
  return data.concat(data.splice(0, times)).join(' ')
}

module.exports = leftRotation
