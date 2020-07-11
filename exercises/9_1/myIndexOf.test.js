const myIndexOf = require('./myIndexOf');

// Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
// Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado

describe('myIndexOf', () => {
  test('return the index if array contains the item', () => {
    expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2);
  });
  test('return -1 if array does not contain the item', () => {
    expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
  });
})
