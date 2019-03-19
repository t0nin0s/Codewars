function camelCase (data) {
  return data.match(/[A-Z]?[a-z]+/g).length
}

module.exports = camelCase
