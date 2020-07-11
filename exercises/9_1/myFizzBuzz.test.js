const myFizzBuzz = require('./myFizzBuzz');

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

describe('myFizzBuzz', () => {
  test('returns fizzbuzz if number is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz')
  });
  test('returns fizz if number is divisible by 3', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  });
  test('returns buzz if number is divisible by 5', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  });
  test('returns the number if it is not divisible by 3 or 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  test('returns false if type of input is not a number', () => {
    expect(myFizzBuzz('not a number')).toBeFalsy();
  });
});