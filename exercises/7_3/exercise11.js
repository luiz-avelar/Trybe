const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

//Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
assert.strictEqual(isAbove(5, 7), false);
assert.strictEqual(isAbove(7, 5), true);