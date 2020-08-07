//=========================================
// Adicionar mais conteúdo em um arquivo

//input filesystem
const fs = require('fs');

//Adicionar--args (1-arquivo) (2-conteudo pra adicionar) (3-callback)
fs.appendFile('exemplo.txt', 'Mais texto sendo adicionado no arquivo', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Dados acrescentados com sucesso!');
    }
});