const evenOrOdd = require('./evenOrOdd')

describe('Testa a função evenOrOdd', () => {
  test('Deve retornar true para numeros pares', () => {
    expect(evenOrOdd(2)).toBe(true)
    expect(evenOrOdd(0)).toBe(true)
    expect(evenOrOdd(-4)).toBe(true)
  })

  test('Deve retornar false para numeros impares', () => {
    expect(evenOrOdd(3)).toBe(false)
    expect(evenOrOdd(-1)).toBe(false)
    expect(evenOrOdd(7)).toBe(false)
  })

  test('Deve retornar false para strings', () => {
    expect(evenOrOdd('3')).toBe(false)
    expect(evenOrOdd('0')).toBe(false)
    expect(evenOrOdd('asdf')).toBe(false)
  })

})