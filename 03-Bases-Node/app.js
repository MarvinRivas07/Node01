const {crearArchivo} = require('./helpers/multiplicar')
const colors = require('colors')
const argv = require('./config/yargs')

console.clear()
//console.log(process.argv)

//console.log('base: yargs', argv.b)
// const [, , arg3 = 'base = 5'] = process.argv
// const [, base = 7] = arg3.split('=')

//let base = 2;

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow , 'creado'))
.catch(err => console.log(err))