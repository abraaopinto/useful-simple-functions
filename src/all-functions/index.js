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
  const regexInvalidsCpf = /(0{11})|(1{11})|(2{11})|(3{11})|(4{11})|(5{11})|(6{11})|(7{11})|(8{11})|(9{11})/
  
  let sum, rest

  if(isNull(vCpf)) return false
 
  if(isNumber(vCpf)) {
    vCpf = vCpf.toString()
    vCpf = vCpf.padStart(11,'0')
  }
  
  vCpf = sanitize(vCpf) 

  if (vCpf.length != 11) return false
  
  if (regexInvalidsCpf.test(vCpf)) return false

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
  const regexInvalidsCnpj = /(0{14})|(1{14})|(2{14})|(3{14})|(4{14})|(5{14})|(6{14})|(7{14})|(8{14})|(9{14})/

  let sum, rest, size, numbers, digits, position

  if(isNull(vCnpj)) return false

  if(isNumber(vCnpj)) {
    vCnpj = vCnpj.toString()
    vCnpj = vCnpj.padStart(14, '0')
  }
  
  vCnpj = sanitize(vCnpj)

  if (vCnpj.length != 14) return false

  if (regexInvalidsCnpj.test(vCnpj)) return false
    
    // Validate digits
    size = vCnpj.length - 2
    numbers = vCnpj.substring(0,size)
    digits = vCnpj.substring(size)
    sum = 0
    position = size - 7
    for (let i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * position--
      if (position < 2) position = 9
    }
    rest = sum % 11 < 2 ? 0 : 11 - sum % 11

    if (rest != digits.charAt(0)) return false
         
    size = size + 1
    numbers = vCnpj.substring(0,size)
    sum = 0
    position = size - 7
    for (let i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * position--
      if (position < 2) position = 9
    }
    rest = sum % 11 < 2 ? 0 : 11 - sum % 11
    
    if (rest != digits.charAt(1)) return false
           
    return true
}
const isCpfCnpj = v => isCpf(v) || isCnpj(v) 

const formatCpf = vCpf => {
  const cpfFormat = /^(\d{3})(\d{3})(\d{3})(\d{2})$/
  const errorMessage = 'Invalid CPF!'

  if (isNull(vCpf)) return errorMessage

  if(isNumber(vCpf)) {
    vCpf = vCpf.toString()
    vCpf = vCpf.padStart(11,'0')
  }
  
  vCpf = sanitize(vCpf) 
  
  return cpfFormat.test(vCpf) ? vCpf.replace(cpfFormat, '$1.$2.$3-$4') : errorMessage
}

const formatCnpj = vCnpj => {
  const cnpjFormat = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/
  const errorMessage = 'Invalid CNPJ!'

  if (isNull(vCnpj)) return errorMessage

  if(isNumber(vCnpj)) {
    vCnpj = vCnpj.toString()
    vCnpj = vCnpj.padStart(14,'0')
  }
  
  vCnpj = sanitize(vCnpj) 
  
  return cnpjFormat.test(vCnpj) ? vCnpj.replace(cnpjFormat, '$1.$2.$3-$4') : errorMessage
}

module.exports = {
  isNull,
  isNotNull,
  isEmpty,
  isNotEmpty,
  isBlank,
  isNumber,
  isCpf,
  isCnpj,
  isCpfCnpj,
  formatCpf,
  formatCnpj,
}
