//import filesystem
const fs = require('fs');

//criar pasta
fs.mkdir('exemplo_com_file', (err) => {
    if(err){
        console.log(err);
    }else{
        //criar arquivo
        fs.writeFile('./exemplo_com_file/exemplo.txt', 'O que vai na file é aqui', (err) => {
            if(err){
                console.log(err);
            }else{
                console.log('Pasta/Diretório e Arquivo criado com sucesso!');
            }
        });
    }
});