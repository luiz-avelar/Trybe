const myArrayWithoutCopy = require('./myRemoveWithoutCopy');
const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

describe('myRemoveWithoutCopy', () => {
  test('returns the same array without the item if it belongs to the array', () => {
    expect(myArrayWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('returns the correct array', () => {
    expect(myArrayWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('return the array provided as parameter modified', () => {
    let arr = [1, 2, 3, 4];
    myArrayWithoutCopy(arr, 3);
    expect(arr).not.toEqual([[1, 2, 3, 4]]);
  });
  test('return the original array unmodified if the item does not belong to it', () => {
    expect(myArrayWithoutCopy([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
})