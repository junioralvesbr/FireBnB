const readline = require('readline')
const evenOrOdd = require('./evenOrOdd')

const rl = readline.createInterface(process.stdin, process.stdout)

rl.question('Digite um numero: ', (num) => {
  evenOrOdd(num)
  rl.close()
})

module.exports = evenOrOdd