const chai = require('chai')
const expect = chai.expect
const useful = require('../index')

describe('Function capitalize', () => {
  const defaultReturn = ''
  it('test in the "capitalize" function with plain text.', () => {
    const textCapitalize = 'TEXT CAPITALIZE'
    expect(useful.capitalize('text capitalize')).to.equal(textCapitalize)
  })
  it('test in the "capitalize" function with null text.', () => {
    const nullText = null
    expect(useful.capitalize(nullText)).to.equal(defaultReturn)
  })
  it('test in the "capitalize" function with text undefined.', () => {
    const undefinedText = undefined
    expect(useful.capitalize(undefinedText)).to.equal(defaultReturn)
  })
  it('test in the "capitalize" function with text with special characters.', () => {
    const textSpecialCaracteresCapitalize = 'TEXT WITH SPECIAL CHARACTERS !@#$%¨&*()_+ CAPITALIZE'
    expect(useful.capitalize('text with special characters !@#$%¨&*()_+ capitalize')).to.equal(textSpecialCaracteresCapitalize)
  })
  it('test in the "capitalize" function with object.', () => {
    const object = {}
    expect(useful.capitalize(object)).to.equal(defaultReturn)
  })
  it('test in the "capitalize" function with function.', () => {
    const functionTest = () => 'null'
    expect(useful.capitalize(functionTest)).to.equal(defaultReturn)
  })
  it('test in the "capitalize" function with number.', () => {
    const testNumber = 1984
    expect(useful.capitalize(testNumber)).to.equal(defaultReturn)
  })
})

describe('Function sanitize', () => {
  it('', () => {})
})

describe('Function sanitizeAndCapitalize', () => {
  it('', () => {})
})

describe('Function capitalizeFirst', () => {
  it('', () => {})
})

describe('Function reverse', () => {
  it('test with text oi', () => {
    expect(useful.reverse('oi')).to.equal('io')
  })
  it('test without parameter', () => {
    expect(useful.reverse()).to.equal('')
  })
  it('test with parameter number', () => {
    expect(useful.reverse(1234)).to.equal('')
  })
  it('test with parameter 1234', () => {
    expect(useful.reverse('12345')).to.equal('54321')
  })
  it('test with parameter 1.00', () => {
    expect(useful.reverse('1.00')).to.equal('00.1')
  })
})

describe('Function formatReverseDate', () => {
  it('', () => {})
})
