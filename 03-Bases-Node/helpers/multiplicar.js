const fs = require('fs');

const crearArchivo = async (base = 5) => {

    try {
        console.log('=========================')
        console.log('   Tabal del:', base)
        console.log('=========================')
        let salida = ''
    
        for(let i =1; i<=15; i++) {
            salida += `${base} X ${i} = ${base*i}\n` 
        }
    
        console.log(salida)
    
        fs.writeFileSync(`tabal-${base}.txt`, salida)
    
        return`tabla-${base}.txt creado`
        
    } catch (err) {
        throw err
    }

}
module.exports = {
   crearArchivo
}