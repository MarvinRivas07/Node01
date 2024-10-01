const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try { 
        let salida, consola = ''
    
        for(let i =1; i<=hasta; i++) {
            salida += `${base} 'X' ${i} '='${base*i}\n`
            consola += `${base} ${'X'.red} ${i} ${'= '.red}${colors.cyan(base*i)}\n`

        }
        if(listar){
            console.log('========================='.green)
            console.log('   Tabal del:'.yellow, colors.yellow(base))
            console.log('========================='.green)
            console.log(consola)
        }
          
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    
        return`tabla-${base}.txt creado`
        
    } catch (err) {
        throw err
    }

}
module.exports = {
   crearArchivo
}