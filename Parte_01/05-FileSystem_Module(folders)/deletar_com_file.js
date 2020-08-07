//aqui apenas deleta o arquivo com o mesmo nome criado nos exemplos.

//import filesystem
const fs = require('fs');

//remover pasta precisa estar sem arquivos nela.
fs.unlink('./pasta_criada_exemplo/exemplo.txt', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Arquivo Deletado');

        //agora remover a pasta.
        fs.rmdir('pasta_criada_exemplo', (err) => {
            if(err){
                console.log(err);
            }else{
                console.log('Pasta/Diretório removida com sucesso!');
            }
        });
    }
});
