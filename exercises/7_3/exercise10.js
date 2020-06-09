const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// Compare dois objetos (JSON) para verificar se são idênticos ou não
assert.deepStrictEqual(obj1, obj2, "Not identical");
assert.deepStrictEqual(obj1, obj3, "Not identical");
assert.deepStrictEqual(obj2, obj3, "Not identical");

