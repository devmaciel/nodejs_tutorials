//import filesystem
const fs = require('fs');

//remover pasta
fs.rmdir('pasta_criada_exemplo', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Pasta/Diretório removida com sucesso!');
    }
});