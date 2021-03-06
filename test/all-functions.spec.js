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
    it('test with negative numerical parameter Infinity', ()=> {
        expect(useful.isNull(Infinity)).to.be.false
    })
    it('test with negative numerical parameter Set', ()=> {
        expect(useful.isNull(new Set())).to.be.false
    })
    it('test with negative numerical parameter Map', ()=> {
        expect(useful.isNull(new Map())).to.be.false
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
    it('test with Infinity parameter', ()=> {
        expect(useful.isNotNull(Infinity)).to.be.true
    })
    it('test with Set parameter', ()=> {
        expect(useful.isNotNull(new Set())).to.be.true
    })
    it('test with Map parameter', ()=> {
        expect(useful.isNotNull(new Map())).to.be.true
    })
    it('test with boolean parameter false', ()=> {
        expect(useful.isNotNull(false)).to.be.false
    })
    it('test with boolean parameter true', ()=> {
        expect(useful.isNotNull(true)).to.be.true
    })
    it('test with parameter number zero', ()=> {
        expect(useful.isNotNull(0)).to.be.true
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

    it('test is empty in object no null and properties null ', ()=> {
        expect(useful.isEmpty({ name: null})).to.be.false
    })

    it('test is empty Array no null', ()=> {
        expect(useful.isEmpty([1,2,3])).to.be.false
    })
  
    it('test is empty in null value', ()=> {
        expect(useful.isEmpty(null)).to.be.true
    })

    it('test is empty in Infinity value', ()=> {
        expect(useful.isEmpty(Infinity)).to.be.false
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

    it('test is empty String', ()=> {
        expect(useful.isEmpty("")).to.be.true
    })

    it('test is empty String', ()=> {
        expect(useful.isEmpty("                    ")).to.be.false
    })

    it('test is empty String', ()=> {
        expect(useful.isEmpty('                     ')).to.be.false
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
        expect(useful.isNotEmpty('          ')).to.be.true
        expect(useful.isNotEmpty(" ")).to.be.true
        expect(useful.isNotEmpty("          ")).to.be.true
    })

    it('test is not empty String', ()=> {
        expect(useful.isNotEmpty('1')).to.be.true
        expect(useful.isNotEmpty('0')).to.be.true
        expect(useful.isNotEmpty("false")).to.be.true
        expect(useful.isNotEmpty("undefined")).to.be.true
    })

    it('test is not empty String', ()=> {
        expect(useful.isNotEmpty('')).to.be.false
    })

    it('test is not empty Number', ()=> {
        expect(useful.isNotEmpty(0)).to.be.true
        expect(useful.isNotEmpty(1)).to.be.true
        expect(useful.isNotEmpty(111111111111)).to.be.true
        expect(useful.isNotEmpty(999999999999)).to.be.true
    })

    it('test is not empty Number Infinity', ()=> {
        expect(useful.isNotEmpty(Infinity)).to.be.true
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
    it('test with parameter number Infinity', ()=> {
        expect(useful.isNumber(Infinity)).to.be.true
    })
    it('test with parameter number 11 digit', ()=> {
        expect(useful.isNumber(11111111111)).to.be.true
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
        expect(useful.isNumber('1,00')).to.be.false
    })
    it('test with string decimal positive parameter "1.00"', ()=> {
        expect(useful.isNumber('1.00')).to.be.true
    })
})

describe('Function isCpf', () => {
    it('test without parameter passing', ()=> {
        expect(useful.isCpf()).to.be.false
    })
    it('test with null parameter', ()=> {
        expect(useful.isCpf(null)).to.be.false
    })
    it('test with NaN parameter', ()=> {
        expect(useful.isCpf(NaN)).to.be.false
    })
    it('test with undefined parameter', ()=> {
        expect(useful.isCpf(undefined)).to.be.false
    })
    it('test with boolean parameter false', ()=> {
        expect(useful.isCpf(false)).to.be.false
    })
    it('test with boolean parameter true', ()=> {
        expect(useful.isCpf(true)).to.be.false
    })
    it('test with object parameter', ()=> {
        expect(useful.isCpf({})).to.be.false
    })
    it('test with Infinity parameter', ()=> {
        expect(useful.isCpf(Infinity)).to.be.false
    })
    it('test with array parameter', ()=> {
        expect(useful.isCpf([])).to.be.false
    })
    it('test with function parameter', ()=> {
        expect(useful.isCpf(() => {})).to.be.false
    })
    it('test with invalid cpf', ()=> {
        expect(useful.isCpf('000.000.000-00')).to.be.false
        expect(useful.isCpf(0)).to.be.false
        expect(useful.isCpf('111.111.111-11')).to.be.false
        expect(useful.isCpf(11111111111)).to.be.false
        expect(useful.isCpf('222.222.222-22')).to.be.false
        expect(useful.isCpf(22222222222)).to.be.false
        expect(useful.isCpf('333.333.333-33')).to.be.false
        expect(useful.isCpf(33333333333)).to.be.false
        expect(useful.isCpf('444.444.444-44')).to.be.false
        expect(useful.isCpf(44444444444)).to.be.false
        expect(useful.isCpf('555.555.555-55')).to.be.false
        expect(useful.isCpf(55555555555)).to.be.false
        expect(useful.isCpf('666.666.666-66')).to.be.false
        expect(useful.isCpf(66666666666)).to.be.false
        expect(useful.isCpf('777.777.777-77')).to.be.false
        expect(useful.isCpf(77777777777)).to.be.false
        expect(useful.isCpf('888.888.888-88')).to.be.false
        expect(useful.isCpf(88888888888)).to.be.false
        expect(useful.isCpf('999.999.999-99')).to.be.false
        expect(useful.isCpf(99999999999)).to.be.false
        expect(useful.isCpf('999.99e.999-99')).to.be.false
    })
    it('test with valid cpf', ()=> {
        expect(useful.isCpf('123.456.789-09')).to.be.true
        expect(useful.isCpf(12345678909)).to.be.true
        expect(useful.isCpf('802.061.312-91')).to.be.true
        expect(useful.isCpf(80206131291)).to.be.true  
    })
})

describe('Function isCnpj', () => {
    it('test without parameter passing', ()=> {
        expect(useful.isCnpj()).to.be.false
    })
    it('test with null parameter', ()=> {
        expect(useful.isCnpj(null)).to.be.false
    })
    it('test with NaN parameter', ()=> {
        expect(useful.isCnpj(NaN)).to.be.false
    })
    it('test with undefined parameter', ()=> {
        expect(useful.isCnpj(undefined)).to.be.false
    })
    it('test with boolean parameter false', ()=> {
        expect(useful.isCnpj(false)).to.be.false
    })
    it('test with boolean parameter true', ()=> {
        expect(useful.isCnpj(true)).to.be.false
    })
    it('test with object parameter', ()=> {
        expect(useful.isCnpj({})).to.be.false
    })
    it('test with array parameter', ()=> {
        expect(useful.isCnpj([])).to.be.false
    })
    it('test with function parameter', ()=> {
        expect(useful.isCnpj(() => {})).to.be.false
    })
    it('test with invalid cnpj', ()=> {
        expect(useful.isCnpj('00.000.000/0000-00')).to.be.false
        expect(useful.isCnpj(0)).to.be.false
        expect(useful.isCnpj('11.111.111/1111-11')).to.be.false
        expect(useful.isCnpj(11111111111111)).to.be.false
        expect(useful.isCnpj('22.222.222/2222-22')).to.be.false
        expect(useful.isCnpj(22222222222222)).to.be.false
        expect(useful.isCnpj('33.333.333/3333-33')).to.be.false
        expect(useful.isCnpj(33333333333333)).to.be.false
        expect(useful.isCnpj('44.444.444/4444-44')).to.be.false
        expect(useful.isCnpj(44444444444444)).to.be.false
        expect(useful.isCnpj('55.555.555/5555-55')).to.be.false
        expect(useful.isCnpj(55555555555555)).to.be.false
        expect(useful.isCnpj('66.666.666/6666-66')).to.be.false
        expect(useful.isCnpj(66666666666666)).to.be.false
        expect(useful.isCnpj('77.777.777/7777-77')).to.be.false
        expect(useful.isCnpj(77777777777777)).to.be.false
        expect(useful.isCnpj('88.888.888/8888-88')).to.be.false
        expect(useful.isCnpj(88888888888888)).to.be.false
        expect(useful.isCnpj('99.999.999/9999-99')).to.be.false
        expect(useful.isCnpj(99999999999999)).to.be.false
        expect(useful.isCnpj('99.99e.999/0001-99')).to.be.false
    })
    it('test with valid cnpj', ()=> {
        expect(useful.isCnpj('52.851.132/0001-20')).to.be.true
        expect(useful.isCnpj(52851132000120)).to.be.true
        expect(useful.isCnpj('18.264.801/0001-20')).to.be.true
        expect(useful.isCnpj(18264801000120)).to.be.true  
        expect(useful.isCnpj('04.879.969/0001-35')).to.be.true
        expect(useful.isCnpj(4879969000135)).to.be.true
        expect(useful.isCnpj('00.000.000/0001-91')).to.be.true
        expect(useful.isCnpj(191)).to.be.true
    })
})

describe('Function isCpfCnpj', () => {
    it('test without parameter passing', ()=> {
        expect(useful.isCpfCnpj()).to.be.false
    })
    it('test with null parameter', ()=> {
        expect(useful.isCpfCnpj(null)).to.be.false
    })
    it('test with NaN parameter', ()=> {
        expect(useful.isCpfCnpj(NaN)).to.be.false
    })
    it('test with undefined parameter', ()=> {
        expect(useful.isCpfCnpj(undefined)).to.be.false
    })
    it('test with Infinity parameter', ()=> {
        expect(useful.isCpfCnpj(Infinity)).to.be.false
    })
    it('test with boolean parameter false', ()=> {
        expect(useful.isCpfCnpj(false)).to.be.false
    })
    it('test with boolean parameter true', ()=> {
        expect(useful.isCpfCnpj(true)).to.be.false
    })
    it('test with object parameter', ()=> {
        expect(useful.isCpfCnpj({})).to.be.false
    })
    it('test with array parameter', ()=> {
        expect(useful.isCpfCnpj([])).to.be.false
    })
    it('test with function parameter', ()=> {
        expect(useful.isCpfCnpj(() => {})).to.be.false
    })
    it('test with invalid cpf or cnpj', ()=> {
        expect(useful.isCpfCnpj('000.000.000-00')).to.be.false
        expect(useful.isCpfCnpj(0)).to.be.false
        expect(useful.isCpfCnpj('111.111.111-11')).to.be.false
        expect(useful.isCpfCnpj(11111111111)).to.be.false
        expect(useful.isCpfCnpj('222.222.222-22')).to.be.false
        expect(useful.isCpfCnpj(22222222222)).to.be.false
        expect(useful.isCpfCnpj('333.333.333-33')).to.be.false
        expect(useful.isCpfCnpj(33333333333)).to.be.false
        expect(useful.isCpfCnpj('444.444.444-44')).to.be.false
        expect(useful.isCpfCnpj(44444444444)).to.be.false
        expect(useful.isCpfCnpj('555.555.555-55')).to.be.false
        expect(useful.isCpfCnpj(55555555555)).to.be.false
        expect(useful.isCpfCnpj('666.666.666-66')).to.be.false
        expect(useful.isCpfCnpj(66666666666)).to.be.false
        expect(useful.isCpfCnpj('777.777.777-77')).to.be.false
        expect(useful.isCpfCnpj(77777777777)).to.be.false
        expect(useful.isCpfCnpj('888.888.888-88')).to.be.false
        expect(useful.isCpfCnpj(88888888888)).to.be.false
        expect(useful.isCpfCnpj('999.999.999-99')).to.be.false
        expect(useful.isCpfCnpj(99999999999)).to.be.false
        expect(useful.isCpfCnpj('999.99e.999-99')).to.be.false
    })
    it('test with valid cpf or cnpj', ()=> {
        expect(useful.isCpfCnpj('123.456.789-09')).to.be.true
        expect(useful.isCpfCnpj(12345678909)).to.be.true
        expect(useful.isCpfCnpj('802.061.312-91')).to.be.true
        expect(useful.isCpfCnpj(80206131291)).to.be.true  
    })
    it('test with invalid cpf or cnpj', ()=> {
        expect(useful.isCpfCnpj('00.000.000/0000-00')).to.be.false
        expect(useful.isCpfCnpj(0)).to.be.false
        expect(useful.isCpfCnpj('11.111.111/1111-11')).to.be.false
        expect(useful.isCpfCnpj(11111111111111)).to.be.false
        expect(useful.isCpfCnpj('22.222.222/2222-22')).to.be.false
        expect(useful.isCpfCnpj(22222222222222)).to.be.false
        expect(useful.isCpfCnpj('33.333.333/3333-33')).to.be.false
        expect(useful.isCpfCnpj(33333333333333)).to.be.false
        expect(useful.isCpfCnpj('44.444.444/4444-44')).to.be.false
        expect(useful.isCpfCnpj(44444444444444)).to.be.false
        expect(useful.isCpfCnpj('55.555.555/5555-55')).to.be.false
        expect(useful.isCpfCnpj(55555555555555)).to.be.false
        expect(useful.isCpfCnpj('66.666.666/6666-66')).to.be.false
        expect(useful.isCpfCnpj(66666666666666)).to.be.false
        expect(useful.isCpfCnpj('77.777.777/7777-77')).to.be.false
        expect(useful.isCpfCnpj(77777777777777)).to.be.false
        expect(useful.isCpfCnpj('88.888.888/8888-88')).to.be.false
        expect(useful.isCpfCnpj(88888888888888)).to.be.false
        expect(useful.isCpfCnpj('99.999.999/9999-99')).to.be.false
        expect(useful.isCpfCnpj(99999999999999)).to.be.false
        expect(useful.isCpfCnpj('99.99e.999/0001-99')).to.be.false
    })
    it('test with valid cpf or cnpj', ()=> {
        expect(useful.isCpfCnpj('52.851.132/0001-20')).to.be.true
        expect(useful.isCpfCnpj(52851132000120)).to.be.true
        expect(useful.isCpfCnpj('18.264.801/0001-20')).to.be.true
        expect(useful.isCpfCnpj(18264801000120)).to.be.true  
        expect(useful.isCpfCnpj('04.879.969/0001-35')).to.be.true
        expect(useful.isCpfCnpj(4879969000135)).to.be.true
    })
})

describe('Function formatCpf', () => {
    it('test valid cpf format 123.456.789-09', ()=> {
        expect(useful.formatCpf('12345678909')).to.be.equal('123.456.789-09')
        expect(useful.formatCpf(12345678909)).to.be.equal('123.456.789-09')
    })
    it('test valid cpf format 802.061.312-91', ()=> {
        expect(useful.formatCpf('80206131291')).to.be.equal('802.061.312-91')
        expect(useful.formatCpf(80206131291)).to.be.equal('802.061.312-91')  
    })
    it('test valid cpf format 802.061.312-91', ()=> {
        expect(useful.formatCpf('80206131291')).to.be.equal('802.061.312-91')
        expect(useful.formatCpf(80206131291)).to.be.equal('802.061.312-91')  
    })
})

describe('Function formatCnpj', () => {
    it('test valid cnpj format 52.851.132/0001-20', ()=> {
        expect(useful.formatCnpj('52851132000120')).to.be.equal('52.851.132/0001-20')
        expect(useful.formatCnpj(52851132000120)).to.be.equal('52.851.132/0001-20')
    })
    it('test valid cnpj format 18.264.801/0001-20', ()=> {
        expect(useful.formatCnpj('18264801000120')).to.be.equal('18.264.801/0001-20')
        expect(useful.formatCnpj(18264801000120)).to.be.equal('18.264.801/0001-20')
    })
})

describe('Function formatCpfCnpj', () => {
    it('test valid cpf format 123.456.789-09', ()=> {
        expect(useful.formatCpfCnpj('12345678909')).to.be.equal('123.456.789-09')
        expect(useful.formatCpfCnpj(12345678909)).to.be.equal('123.456.789-09')
    })
    it('test valid cpf format 802.061.312-91', ()=> {
        expect(useful.formatCpfCnpj('80206131291')).to.be.equal('802.061.312-91')
        expect(useful.formatCpfCnpj(80206131291)).to.be.equal('802.061.312-91')  
    })
    it('test valid cnpj format 52.851.132/0001-20', ()=> {
        expect(useful.formatCnpj('52851132000120')).to.be.equal('52.851.132/0001-20')
        expect(useful.formatCnpj(52851132000120)).to.be.equal('52.851.132/0001-20')
    })
    it('test valid cnpj format 18.264.801/0001-20', ()=> {
        expect(useful.formatCpfCnpj('18264801000120')).to.be.equal('18.264.801/0001-20')
        expect(useful.formatCpfCnpj(18264801000120)).to.be.equal('18.264.801/0001-20')
    })
})
