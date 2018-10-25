const R = require('ramda')

describe('some_trouble', () => {
  it('is a ...i...m', () => {
    const code = 'YOUR_CODE_HERE'
    const character_array = R.split('', code) 

    const same_same = R.reduce((acc, char) => R.prepend(char, acc), [], character_array)

    const test = R.join('', same_same)
    expect(code).toEqual(test)
  })


  it('has some structure', () => {
    const code = 'YOUR_CODE_HERE'

    expect(code).toHaveLength(5)
    
    const matches = code.match(/.6(\S)(\d)1/)
    const a = parseInt(matches[1], 10)
    const b = parseInt(matches[2], 10)
    expect(b - 1).toBe(a)
  })
})