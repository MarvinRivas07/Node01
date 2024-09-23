const fs = require('fs');

console.clear()
console.log('=========================')
console.log('   Tabal de 5     ')
console.log('=========================')

let base = 10;
let salida = ''

for(let i =1; i<=15; i++) {
    salida += `${base} X ${i} = ${base*i}\n` 
}

console.log(salida)

fs.writeFile(`tabal-${base}.txt`, salida, (err) => {
    if(err) throw err
    console.log(`tabla-${base}.txt creado`)
} )