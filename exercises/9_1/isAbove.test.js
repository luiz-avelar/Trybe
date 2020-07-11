const isAbove = require('./isAbove');
const { TestScheduler } = require('jest');

// Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.

describe('isAbove', () => {
  test('return true if first number is larger than second number', () => {
    expect(isAbove(5, 4)).toBeTruthy();
  });
  test('return false if first number is not larger than second number', () => {
    expect(isAbove(4, 5)).toBeFalsy();
  });
  test('return false if first number is equal second number', () => {
    expect(isAbove(5, 5)).toBeFalsy();
  })
})