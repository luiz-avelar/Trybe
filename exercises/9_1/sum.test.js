// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
// Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")

const sum = require('./sum.js');

describe('sum', () => {
  test('sum of 4 and 5 equals 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  test('sum of 0 and 0 equals 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  test('throw an error when parameter is string', () => {
    expect(() => { sum(4,'5') }).toThrow();
  });
  test('error message is "parameters must be numbers"', () => {
    expect(() => { sum(4,'5') }).toThrow(/parameters must be numbers/);
  });
});
