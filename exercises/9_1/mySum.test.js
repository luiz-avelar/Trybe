const mySum = require('./mySum');

// Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
// Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado

describe('mySum', () => {
  test('sum of array [1, 2, 3, 4] is 10', () => {
    expect(mySum([1, 2, 3, 4])).toBe(10);
  });
  test('sum of array [1, -2, -3, 4] is 0', () => {
    expect(mySum([1, -2, -3, 4])).toBe(0);
  });
});
