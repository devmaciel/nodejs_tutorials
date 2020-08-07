//=========================================
// DELETAR ARQUIVO

//input filesystem
const fs = require('fs');

//Deletar--args (1-arquivo) (2-callback)
fs.unlink('exemplo.txt', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Arquivo deletado com sucesso!');
    }
})