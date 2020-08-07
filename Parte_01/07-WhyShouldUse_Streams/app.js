//===============================================
// Porque utilizar streams?
//para arquivos grandes que o buffer não consegue armazenar.

//Aqui não vai deixar porque o arquivo é muito grande.
// const fs = require('fs');
// fs.readFile('./arquivoEnorme.txt', (err,file) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(file);
//     }
// });

//aqui vai carregar de pouco a pouco e vai lendo o arquivo
//então vai pegando pedaços do arquivo.
const readStream = fs.createReadStream('./arquivoEnorme.txt', (err) => {
    readStream.on('data', (chunk) =>{
        console.log(chunk); //data
    });  
});

