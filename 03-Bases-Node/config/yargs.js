const argv = require('yargs')
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        demanOption: true,
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    })
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        default: 10,
                        descibe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        demanOption: true,
                        describe: 'Es el numero hasta cual quiere que llegue la multiplicacion'
                    })
                    .check((argv, option) => {
                        console.log('yargs', argv)
                        if(isNaN(argv.b)){
                            throw 'La base tiene que ser un numero'
                        }
                        return true
                    })
                    .argv

module.exports = argv