const sanitize = s => (typeof s !== 'string') ? '' : s.toString().replace(/[^A-Z a-z 0-9]/g, '')
const capitalize = s => (typeof s !== 'string') ? '' : s.toUpperCase()
const composeAsString = (...fns) => (s) => {
  if(fns === undefined && fns.length === 0) return ''
  if (typeof s !== 'string') return ''
  let result = s
  fns.forEach(fn => result = fn(result))
  return result
}
const sanitizeAndCapitalize = s => composeAsString(capitalize, sanitize)
const capitalizeFirst = s => (typeof s !== 'string') ? '' : capitalize(s.charAt(0)) + s.slice(1)
const reverse = s => ( typeof s !== 'string') ? '' : s.split('').reverse().join('')
const formatReverseDate = d => (typeof d !== 'string') ? '' : d.split(/\D/).reverse().join('-')
module.exports = {
  sanitize,
  capitalize,
  sanitizeAndCapitalize,
  capitalizeFirst,
  reverse,  
  formatReverseDate,
  composeAsString
}
