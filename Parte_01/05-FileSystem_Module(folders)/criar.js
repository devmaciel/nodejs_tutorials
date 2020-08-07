//import filesystem
const fs = require('fs');

//criar pasta
fs.mkdir('pasta_criada_exemplo', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Pasta/Diretório criado com sucesso!');
    }
});