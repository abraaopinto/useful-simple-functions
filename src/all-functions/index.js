const sanitize = require('../string-functions').sanitize
const isNull = o => !o && o !== 0
const isNotNull = o => !!o || o === 0
const isEmpty = o => {
  if (isNull(o)) return true
  if (o.constructor === Object) return Object.entries(o).length === 0
  if (o.constructor === Array || o.constructor === String) return o.length === 0
  if (o.constructor === Set || o.constructor === Map) return o.size === 0
  if (typeof o === 'number' && isNotNull(o)) return false
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
  
  let firstDigit, secondDigit

  if(isNull(vCpf)) return false
 
  if(isNumber(vCpf)) {
    vCpf = vCpf.toString()
    vCpf = vCpf.padStart(11,'0')
  }
  
  vCpf = sanitize(vCpf) 

  if (vCpf.length != 11) return false
  
  if (regexInvalidsCpf.test(vCpf)) return false

  // Validate first digit
  firstDigit = 11 - vCpf.split('').slice(0,9).map( (e,i,a) => e * ((a.length+1)-i)).reduce((s, v) => s + v)%11
  
  if ((firstDigit >= 10 ? 0 : firstDigit) != parseInt(vCpf.charAt(9))) return false

  // Validate second digit
  secondDigit = 11 - vCpf.split('').slice(0,10).map( (e,i,a) => e * ((a.length+1)-i)).reduce((s, v) => s + v)%11

  if ((secondDigit >= 10 ? 0 : secondDigit) != parseInt(vCpf.charAt(10))) return false
    
  return true
}

const isCnpj = vCnpj => {
  const regexInvalidsCnpj = /(0{14})|(1{14})|(2{14})|(3{14})|(4{14})|(5{14})|(6{14})|(7{14})|(8{14})|(9{14})/

  let firstDigit, secondDigit

  if(isNull(vCnpj)) return false

  if(isNumber(vCnpj)) {
    vCnpj = vCnpj.toString()
    vCnpj = vCnpj.padStart(14, '0')
  }
  
  vCnpj = sanitize(vCnpj)

  if (vCnpj.length != 14) return false

  if (regexInvalidsCnpj.test(vCnpj)) return false
    
  // Validate digits
  vCnpj = vCnpj.split('')

  firstDigit = 11 - vCnpj.slice(0,12).reverse().slice(0,8).map((e, i) => e * (i+2)).concat(vCnpj.slice(0,12).reverse().slice(8,12).map((e,i) => e * (i+2))).reduce((s,v) => s + v)%11
  
  if ((firstDigit >= 10 ? 0 : firstDigit) != vCnpj[12]) return false

  secondDigit = 11 - vCnpj.slice(0,13).reverse().slice(0,8).map((e, i) => e * (i+2)).concat(vCnpj.slice(0,13).reverse().slice(8,13).map((e,i) => e * (i+2))).reduce((s,v) => s + v)%11
  
  if ((secondDigit >= 10 ? 0 : secondDigit) != vCnpj[13]) return false
  
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
  
  return cnpjFormat.test(vCnpj) ? vCnpj.replace(cnpjFormat, '$1.$2.$3/$4-$5') : errorMessage
}

const formatCpfCnpj = v => v.toString().length <= 11 ? formatCpf(v) : formatCnpj(v) 

const compose = (...functions) => (...params) => functions.forEach(fn => fn(...params))

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
  formatCpfCnpj,
  compose
}
