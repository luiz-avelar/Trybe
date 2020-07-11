const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// A função sum(a, b) retorna a soma do parâmetro a com o b

// Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(4, 5), 9, "Error");

// Teste se o retorno de sum(0, 0) é 0
assert.strictEqual(sum(0, 0), 0, "Error");

// Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
assert.strictEqual(sum(4, "5"), "Error");  

// Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
assert.strictEqual(sum(4, "5"), "paramers must be numbers");
