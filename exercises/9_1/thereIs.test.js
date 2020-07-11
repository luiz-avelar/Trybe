const thereIs = require('./thereIs');

// Teste se uma variável foi definida

describe('thereIs', () => {
  test('type of defined variable type is defined', () => {
    expect(typeof thereIs).toBeDefined();
  });
});