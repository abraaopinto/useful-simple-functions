const chai = require('chai')
const expect = chai.expect
const useful  = require('../index')

describe('Function isNull', ()=> {
    it('test without parameter passing', ()=> {
        expect(useful.isNull()).to.be.true
    })
    it('test with null parameter', ()=> {
        expect(useful.isNull(null)).to.be.true
    })
    it('test with NaN parameter', ()=> {
        expect(useful.isNull(NaN)).to.be.true
    })
    it('test with undefined parameter', ()=> {
        expect(useful.isNull(undefined)).to.be.true
    })
    it('test with boolean parameter false', ()=> {
        expect(useful.isNull(false)).to.be.true
    })
    it('test with boolean parameter true', ()=> {
        expect(useful.isNull(true)).to.be.false
    })
    it('test with parameter number zero', ()=> {
        expect(useful.isNull(0)).to.be.false
    })
    it('test with positive numerical parameter 1', ()=> {
        expect(useful.isNull(1)).to.be.false
    })
    it('test with negative numerical parameter -1', ()=> {
        expect(useful.isNull(-1)).to.be.false
    })
    it('test with object parameter', ()=> {
        expect(useful.isNull({})).to.be.false
    })
    it('test with array parameter', ()=> {
        expect(useful.isNull([])).to.be.false
    })
    it('test with function parameter', ()=> {
        expect(useful.isNull(() => {})).to.be.false
    })  
})

describe('Function isNotNull', ()=> {
    it('test without parameter passing', ()=> {
        expect(useful.isNotNull()).to.be.false
    })
    it('test with null parameter', ()=> {
        expect(useful.isNotNull(null)).to.be.false
    })
    it('test with NaN parameter', ()=> {
        expect(useful.isNotNull(NaN)).to.be.false
    })
    it('test with undefined parameter', ()=> {
        expect(useful.isNotNull(undefined)).to.be.false
    })
    it('test with boolean parameter false', ()=> {
        expect(useful.isNotNull(false)).to.be.false
    })
    it('test with boolean parameter true', ()=> {
        expect(useful.isNotNull(true)).to.be.true
    })
    it('test with parameter number zero', ()=> {
        expect(useful.isNotNull(0)).to.be.false
    })
    it('test with positive numerical parameter 1', ()=> {
        expect(useful.isNotNull(1)).to.be.true
    })
    it('test with negative numerical parameter -1', ()=> {
        expect(useful.isNotNull(-1)).to.be.true
    })
    it('test with object parameter', ()=> {
        expect(useful.isNotNull({})).to.be.true
    })
    it('test with array parameter', ()=> {
        expect(useful.isNotNull([])).to.be.true
    })
    it('test with function parameter', ()=> {
        expect(useful.isNotNull(() => {})).to.be.true
    })    
})

describe('Function isEmpty', ()=> {
   
    it('test is empty object', ()=> {
        expect(useful.isEmpty({})).to.be.true
    })

    it('test is empty Array', ()=> {
        expect(useful.isEmpty([])).to.be.true
    })

    it('test is empty in object no null', ()=> {
        expect(useful.isEmpty({ name:'John'})).to.be.false
    })
  
    it('test is empty Array no null', ()=> {
        expect(useful.isEmpty([1,2,3])).to.be.false
    })
  
    it('test is empty in null value', ()=> {
        expect(useful.isEmpty(null)).to.be.true
    })

    it('test is empty function', ()=> {
        expect(useful.isEmpty(()=>{})).to.be.true
    })

    it('test is empty Set', ()=> {
        expect(useful.isEmpty(new Set())).to.be.true
    })

    it('test is empty Map', ()=> {
        expect(useful.isEmpty(new Map())).to.be.true
    })

    it('test is empty String', ()=> {
        expect(useful.isEmpty('')).to.be.true
    })
})

describe('Function isNotEmpty', ()=> {
   
    it('test is not empty object', ()=> {
        expect(useful.isNotEmpty({})).to.be.false
    })

    it('test is not empty Array', ()=> {
        expect(useful.isNotEmpty([])).to.be.false
    })

    it('test is not empty in object no null', ()=> {
        expect(useful.isNotEmpty({ name:'John'})).to.be.true
    })
  
    it('test is not empty Array no null', ()=> {
        expect(useful.isNotEmpty([1,2,3])).to.be.true
    })
  
    it('test is not empty in null value', ()=> {
        expect(useful.isNotEmpty(null)).to.be.false
    })

    it('test is not empty function', ()=> {
        expect(useful.isNotEmpty(()=>{})).to.be.false
    })

    it('test is not empty Set', ()=> {
        expect(useful.isNotEmpty(new Set())).to.be.false
    })

    it('test is not empty Map', ()=> {
        expect(useful.isNotEmpty(new Map())).to.be.false
    })

    it('test is not empty String', ()=> {
        expect(useful.isNotEmpty('John')).to.be.true
    })

    it('test is not empty String', ()=> {
        expect(useful.isNotEmpty(' ')).to.be.true
    })

    it('test is not empty String', ()=> {
        expect(useful.isNotEmpty('')).to.be.false
    })
})

describe('Function isBlank', () => {
    it('test is blank value blank', () => {
        expect(useful.isBlank("             ")).to.be.true
    })

    it('test is blank value null', () => {
        expect(useful.isBlank(null)).to.be.false
    })
})

describe('Function isNumber', ()=> {
    it('test without parameter passing', ()=> {
        expect(useful.isNumber()).to.be.false
    })
    it('test with null parameter', ()=> {
        expect(useful.isNumber(null)).to.be.false
    })
    it('test with NaN parameter', ()=> {
        expect(useful.isNumber(NaN)).to.be.false
    })
    it('test with undefined parameter', ()=> {
        expect(useful.isNumber(undefined)).to.be.false
    })
    it('test with boolean parameter false', ()=> {
        expect(useful.isNumber(false)).to.be.false
    })
    it('test with boolean parameter true', ()=> {
        expect(useful.isNumber(true)).to.be.false
    })
    it('test with object parameter', ()=> {
        expect(useful.isNumber({})).to.be.false
    })
    it('test with array parameter', ()=> {
        expect(useful.isNumber([])).to.be.false
    })
    it('test with function parameter', ()=> {
        expect(useful.isNumber(() => {})).to.be.false
    }) 
    it('test with parameter number zero', ()=> {
        expect(useful.isNumber(0)).to.be.true
    })
    it('test with positive numerical parameter 1', ()=> {
        expect(useful.isNumber(1)).to.be.true
    })
    it('test with negative numerical parameter -1', ()=> {
        expect(useful.isNumber(-1)).to.be.true
    })
    it('test with decimal positive parameter 1.00', ()=> {
        expect(useful.isNumber(1.00)).to.be.true
    })
    it('test with decimal negative parameter -1.00', ()=> {
        expect(useful.isNumber(-1.00)).to.be.true
    })
    it('test with decimal positive parameter .00', ()=> {
        expect(useful.isNumber(.00)).to.be.true
    })
    it('test with decimal positive parameter 1,00', ()=> {
        expect(useful.isNumber(1,00)).to.be.true
    })
    it('test with string decimal positive parameter "1.00"', ()=> {
        expect(useful.isNumber('1.00')).to.be.true
    })
})

describe('Function ...', () => {
    it('', () => {})
})