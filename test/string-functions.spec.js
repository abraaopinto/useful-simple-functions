const chai = require('chai')
const expect = chai.expect
const stringUseful = require('../src/string-functions/index')



describe('Function capitalize', () => {
    const defaultReturn = ''
    it('test in the "capitalize" function with plain text.', () => {
        const textCapitalize = 'TEXT CAPITALIZE'
        expect(stringUseful.capitalize('text capitalize')).to.equal(textCapitalize)
    })
    it('test in the "capitalize" function with null text.', () => {
        const nullText = null
        expect(stringUseful.capitalize(nullText)).to.equal(defaultReturn)
    })
    it('test in the "capitalize" function with text undefined.', () => {
        const undefinedText = undefined
        expect(stringUseful.capitalize(undefinedText)).to.equal(defaultReturn)
    })
    it('test in the "capitalize" function with text with special characters.', () => {
        const textSpecialCaracteresCapitalize = 'TEXT WITH SPECIAL CHARACTERS !@#$%¨&*()_+ CAPITALIZE'
        expect(stringUseful.capitalize('text with special characters !@#$%¨&*()_+ capitalize')).to.equal(textSpecialCaracteresCapitalize)
    })
    it('test in the "capitalize" function with object.', () => {
        const object = {}
        expect(stringUseful.capitalize(object)).to.equal(defaultReturn)
    })
    it('test in the "capitalize" function with function.', () => {
        const functionTest = () => 'null'
        expect(stringUseful.capitalize(functionTest)).to.equal(defaultReturn)
    })
    it('test in the "capitalize" function with number.', () => {
        const testNumber = 1984
        expect(stringUseful.capitalize(testNumber)).to.equal(defaultReturn)
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

describe('Function formatReverseDate', () => {
    it('', () => {})
})