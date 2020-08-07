//import filesystem
const fs = require('fs');

//readdir (1-nome da pasta) (2-erro e args dos arquivos)
fs.readdir('pasta_criada_exemplo', (err, files) => {
    if(err){
        console.log(err);
    }else{
        console.log(files); //cria um array com as files
        for(let file of files){
            fs.unlink('./pasta_criada_exemplo/'+file, (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log(file.length+' arquivos deletados');
                }
            });
        }
    }
});