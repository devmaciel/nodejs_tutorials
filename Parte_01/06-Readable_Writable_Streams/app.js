//==============================================
// Ler e Escrever mais facilmente em arquivos.

//import
const fs = require('fs');

//constante da readStream com arquivo que colocamos
const readStream = fs.createReadStream('./exemplo.txt', 'utf8');
const writeStream = fs.createWriteStream('exemplo2.txt');

//event listenner novamente. 
readStream.on('data', (chunk) =>{
    // console.log(chunk);

    //cria outro arquivo com a data do primeiro, para separar logs.
    //a stream consegue dar write enquanto ainda está fazendo load.
    writeStream.write(chunk);
});