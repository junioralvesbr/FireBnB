const readline = require('readline')

const rl = readline.createInterdace(process.stdin, process.stdout)

rl.question('Insira o numero de pessoas: ', (answear) => { console.log(answear) })
rl.close()