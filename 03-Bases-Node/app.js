
const {crearArchivo} = require('./helpers/multiplicar')

console.clear()

const [, , arg3 = 'base = 5'] = process.argv
const [, base = 7] = arg3.split('=')

//let base = 2;

crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err))