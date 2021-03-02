const isNull = o => o === null || typeof o === undefined 
const isNotNull = o => !isNull(o)
const isEmpty = function (o) {  
    if (isNull(o)) return true

    if (o.constructor === Object) return  Object.entries(o).length === 0

    if (o.constructor === Array || o.constructor === String) return !o.length

    if (o.constructor === Set || o.constructor === Map) return !o.size

    return true
}
const isNotEmpty = o => !isEmpty(o)

const isBlank = s => isNotNull(s) && s.constructor === String && s.trim() !== ''

module.exports = {
    isNull,
    isNotNull,
    isEmpty,
    isNotEmpty,
    isBlank
}