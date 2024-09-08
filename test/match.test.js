// Código do math.test.js
const assert = require('assert');
const { sum } = require('../match');

describe('Funções Matemáticas', function () {
  it('Deve retornar a soma de dois números', function () {
    assert.strictEqual(sum(1, 2), 3);
  });
});
