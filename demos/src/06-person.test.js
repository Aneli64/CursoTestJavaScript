const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7);
  });

  test('should return down', () => {
    person.weight = 45;
    const imc = person.calcIMCs();
    expect(imc).toBe('down')
  });

  test('should return normal', () => {
    person.weight = 59;
    const person = new Person('Nicolas', 59, 1.7)
    const imc = person.calcIMCs();
    expect(imc).toBe('normal')
  });
})


