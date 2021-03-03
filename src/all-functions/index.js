const isNull = o => !o
const isNotNull = o => !!o
const isEmpty = o => {  
    if (isNull(o)) return true
    if (o.constructor === Object) return  Object.entries(o).length === 0
    if (o.constructor === Array || o.constructor === String) return o.length === 0
    if (o.constructor === Set || o.constructor === Map) return o.size === 0
    return true
}
const isNotEmpty = o => !isEmpty(o)
const isBlank = s => isNotEmpty(s) && s.constructor === String && s.trim().length === 0
module.exports = {
    isNull,
    isNotNull,
    isEmpty,
    isNotEmpty,
    isBlank
}