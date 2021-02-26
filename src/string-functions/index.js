const sanitize = s => (typeof s !== 'string') ? '' : s.toString().replace(/[^A-Z a-z 0-9]/g, '')
const capitalize = s => (typeof s !== 'string') ? '' : s.toUpperCase()
const sanitizeAndCapitalize = s => (typeof s !== 'string') ? '' : capitalize(sanitize(s))
const capitalizeFirst = s => (typeof s !== 'string') ? '' : capitalize(s.charAt(0)) + s.slice(1)
const formatReverseDate = d => (typeof d !== 'string') ? '' : d.split(/\D/).reverse().join('-')
module.exports = {
  sanitize,
  capitalize,
  sanitizeAndCapitalize,
  capitalizeFirst,
  formatReverseDate
}