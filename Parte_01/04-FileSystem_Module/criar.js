//=========================================
// CRIAR ARQUIVO

//input filesystem
const fs = require('fs');
// const { addListener } = require('process'); //criou sozin no vscode ;v

//criar o arquivo
fs.writeFile('exemplo.txt', 'aqui é o que vai escrito no arquivo', (err) => {
    if(err){
        //callback de erro, na var (err)
        console.log(err);
    }else{
        console.log('Arquivo criado com sucesso');

        //lerArquivo--args: (1-arquivo) (2-encodType) (3-Callback Function)
        fs.readFile('exemplo.txt', 'utf8', (err,file) => {
            if(err){
                console.log(err);
            }else{
                //mostra o buffer da file sem o encode, com encode mostra correto
                console.log(file);
            }
        });
    }  
});

