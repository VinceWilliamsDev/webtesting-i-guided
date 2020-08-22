const { add } = require('./calculator.js');

// test away!
it('should return the value if passed a single value', () => {
    expect(add(2)).toBe(2)
})

it('should return the sum of a comma separated list of arguments', () => {
    expect(add(1, 2, 3)).toBe(6)
})