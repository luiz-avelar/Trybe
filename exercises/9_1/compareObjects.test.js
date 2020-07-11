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

describe('compare objects', () => {
  test('obj1 is equal obj2', () => {
    expect(obj1).toEqual(obj2);
  });
  test('obj1 is not equal obj2', () => {
    expect(obj1).not.toEqual(obj3);
  });
  test('obj2 is not equal obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
})
