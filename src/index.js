const all = require('./all-functions')
const string = require('./string-functions')

const useful = {
  ...all,
  ...string
}

module.exports = useful

module.exports.default = useful
