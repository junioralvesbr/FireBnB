function evenOrOdd(num) {
  if (num !== parseInt(num)) {
    console.log('Por favor, digite um numero inteiro')
    return false
  }

  if (num % 2 === 0) {
    console.log(`O numero ${num} é par`)
    return true
  }
  console.log(`O numero ${num} é impar`)
  return false
}

module.exports = evenOrOdd