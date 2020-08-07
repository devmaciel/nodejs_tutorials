//=========================================
// RENOMEAR ARQUIVO

//input filesystem
const fs = require('fs');

//Rename--args (1-arquivo) (2-novo-nome) (3-callback)
fs.rename('exemplo.txt', 'exemplo_renomeado.txt', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Renomeado com sucesso!');
    }
});