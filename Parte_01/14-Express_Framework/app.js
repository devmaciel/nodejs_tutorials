//=======================================
// Getting Started; EXPRESS

//expressjs.com 
//podemos baixar no npmjs, ou pegar o comando

/**
 * npm init --yes (yes skip as config inicial)
 * npm install express
 */


// require do express, retorna objeto
const express = require('express');
const app = express();

//replicando a aula do http module, porém sintaxe express
app.get('/', (req,res) =>{
    res.send('Olá do NodeJS');
});

app.listen(3000);