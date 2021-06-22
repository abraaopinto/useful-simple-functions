const isValidString = s => typeof s === 'string'
const sanitize = s => isValidString(s) ? s.toString().replace(/[^A-Z a-z 0-9]/g, '') : ''
const capitalize = s => isValidString(s) ? s.toUpperCase() : ''
const composeAsString = (...fns) => (s) => {
  if (fns === undefined && fns.length === 0) return ''
  if (!isValidString(s)) return ''
  let result = s
  fns.forEach(fn => result = fn(result))
  return result
}
const sanitizeAndCapitalize = s => composeAsString(capitalize, sanitize)(s)
const capitalizeFirst = s => isValidString(s) ? capitalize(s.charAt(0)) + s.slice(1) : ''
const reverse = s => isValidString(s) ? s.split('').reverse().join('') : ''
const formatReverseDate = s => isValidString(s) ? s.split(/\D/).reverse().join('-') : ''
const lowerCase = s => isValidString(s) ? s.toLowerCase() : ''
const upperCase = s => isValidString(s) ? s.toUpperCase() : ''
const capitalizeSentence = s => {
  if (!isValidString(s)) return ''
  s = s.replace(/(^\s*)|(\s*$)/gi, '')
  s = s.replace(/[ ]{2,}/gi, ' ')
  return s.split(/\r\n|\r|\n/).map(capitalizeFirst).join(' ')
}
const capitalizeWord = s => {
  if (!isValidString(s)) return ''
  s = s.replace(/(^\s*)|(\s*$)/gi, '')
  s = s.replace(/[ ]{2,}/gi, ' ')
  s = s.replace(/\n /, '\n')
  return s.split(' ').map(capitalizeFirst).join(' ')
}
const lineNumbers = s => isValidString(s) ? s.split(/\r\n|\r|\n/).length : 0
const wordNumbers = s => {
  if (!isValidString(s)) return 0
  s = s.replace(/(^\s*)|(\s*$)/gi, '')
  s = s.replace(/[ ]{2,}/gi, ' ')
  s = s.replace(/\n /, '\n')
  return s.split(' ').length
}
module.exports = {
  isValidString,
  sanitize,
  capitalize,
  sanitizeAndCapitalize,
  capitalizeFirst,
  reverse,
  formatReverseDate,
  composeAsString,
  lowerCase,
  upperCase,
  lineNumbers,
  wordNumbers,
  capitalizeSentence,
  capitalizeWord
}
