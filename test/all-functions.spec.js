const chai = require('chai')
const expect = chai.expect
const useful  = require('../index')

describe('Function isNull', ()=> {
    it('test is null', ()=> {
        expect(useful.isNull(null)).to.be.true
    })
    it('test is undefined', ()=> {
        expect(useful.isNull(undefined)).to.be.false
    })
    it('test is object', ()=> {
        const objectTest = {}
        expect(useful.isNull(objectTest)).to.be.false
    })
    it('test is number', ()=> {
        expect(useful.isNull(1)).to.be.false
    })
    it('test is array', ()=> {
        expect(useful.isNull([])).to.be.false
    })
    it('test is function', ()=> {
        expect(useful.isNull( () => "text" )).to.be.false
    })
    it('test is NaN', ()=> {
        expect(useful.isNull(NaN)).to.be.false
    })
  
})

describe('Function isNotNull', ()=> {
    it('test is null', ()=> {
        expect(useful.isNotNull(null)).to.be.false
    })
    it('test is undefined', ()=> {
        expect(useful.isNotNull(undefined)).to.be.true
    })
    it('test is object', ()=> {
        const objectTest = {}
        expect(useful.isNotNull(objectTest)).to.be.true
    })
    it('test is number', ()=> {
        expect(useful.isNotNull(1)).to.be.true
    })
    it('test is array', ()=> {
        expect(useful.isNotNull([])).to.be.true
    })
    it('test is function', ()=> {
        expect(useful.isNotNull( () => "text" )).to.be.true
    })
    it('test is NaN', ()=> {
        expect(useful.isNotNull(NaN)).to.be.true
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
})

describe('Function ...', () => {
    it('', () => {})
})