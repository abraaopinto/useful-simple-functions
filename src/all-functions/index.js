const sanitize = require('../string-functions').sanitize

const isNull = o => !o && o !== 0
const isNotNull = o => !!o
const isEmpty = o => {
  if (isNull(o)) return true
  if (o.constructor === Object) return Object.entries(o).length === 0
  if (o.constructor === Array || o.constructor === String) return o.length === 0
  if (o.constructor === Set || o.constructor === Map) return o.size === 0
  return true
}
const isNotEmpty = o => !isEmpty(o)
const isBlank = s => isNotEmpty(s) && s.constructor === String && s.trim().length === 0
const isNumber = n => {
  if (isNull(n)) return false
  if (n.constructor === Number || n.constructor === String) return !isNaN(n)
  return false
}
const isCpf = vCpf => {
  let sum, rest

  if(isNull(vCpf)) return false
 
  if(isNumber(vCpf)) {
    vCpf = vCpf.toString()
    vCpf = vCpf.padStart(11,'0')
  }
  
  vCpf = sanitize(vCpf) 

  if (vCpf.length != 11  ||
    vCpf == "00000000000" ||
    vCpf == "11111111111" ||
    vCpf == "22222222222" ||
    vCpf == "33333333333" ||
    vCpf == "44444444444" ||
    vCpf == "55555555555" ||
    vCpf == "66666666666" ||
    vCpf == "77777777777" ||
    vCpf == "88888888888" ||
    vCpf == "99999999999") return false

    // Validate first digit
    sum = 0
    for (let i = 0; i < 9; i++) sum += parseInt(vCpf.charAt(i)) * (10 - i)
    
    rest = 11 - (sum % 11)
    
    if (rest === 10 || rest === 11) rest = 0
    
    if (rest != parseInt(vCpf.charAt(9))) return false
    
      // Validate second digit
    sum = 0
    for (let i = 0; i < 10; i++) sum += parseInt(vCpf.charAt(i)) * (11 - i)
    
    rest = 11 - (sum % 11)

    if (rest === 10 || rest === 11) rest = 0
    
    if (rest != parseInt(vCpf.charAt(10))) return false
    
    return true
}
const isCnpj = vCnpj => {
  let sum, rest, size, numbers, digits, position

  if(isNull(vCnpj)) return false

  if(isNumber(vCnpj)) {
    vCnpj = vCnpj.toString()
    vCnpj = vCnpj.padStart(14, '0')
  }
  
  vCnpj = sanitize(vCnpj)

  if (vCnpj.length != 14 ||
    vCnpj == "00000000000000" ||
    vCnpj == "11111111111111" ||
    vCnpj == "22222222222222" ||
    vCnpj == "33333333333333" ||
    vCnpj == "44444444444444" ||
    vCnpj == "55555555555555" ||
    vCnpj == "66666666666666" ||
    vCnpj == "77777777777777" ||
    vCnpj == "88888888888888" ||
    vCnpj == "99999999999999") return false
    
    // Validate digits
    size = vCnpj.length - 2
    numbers = vCnpj.substring(0,size)
    digits = vCnpj.substring(size)
    sum = 0
    position = size - 7
    for (let i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * position--
      if (position < 2)
            position = 9
    }
    rest = sum % 11 < 2 ? 0 : 11 - sum % 11

    if (rest != digits.charAt(0)) return false
         
    size = size + 1
    numbers = vCnpj.substring(0,size)
    sum = 0
    position = size - 7
    for (let i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * position--
      if (position < 2)
            position = 9
    }
    rest = sum % 11 < 2 ? 0 : 11 - sum % 11
    
    if (rest != digits.charAt(1)) return false
           
    return true
}
const isCpfCnpj = v => isCpf(v) || isCnpj(v) 

module.exports = {
  isNull,
  isNotNull,
  isEmpty,
  isNotEmpty,
  isBlank,
  isNumber,
  isCpf,
  isCnpj,
  isCpfCnpj
}
