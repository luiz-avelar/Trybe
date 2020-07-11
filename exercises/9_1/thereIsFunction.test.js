function thereIs() {}

// Teste se uma função foi definida

describe('thereIsFunction', () => {
  test('type of defined function to be "function"', () => {
    expect(typeof (thereIs)).toBe('function');
  })
  test('type of undefined function to be undefined', () => {
    expect(typeof (thereIsNot)).toBe('undefined');
  })
})

