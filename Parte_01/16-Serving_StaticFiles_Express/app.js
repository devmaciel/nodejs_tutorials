//express object
const express = require('express');
const app = express();

//require path, pra poder utilizar logo abaixo
const path = require('path');

//aqui vai pra uma static folder qualquer (alias), esconder nome da folder
//__dirname vai pega nosso app.js (directory name), onde estamos.
app.use('/public', express.static(path.join(__dirname, 'static')));

//rota
app.get('/', (req,res) => {
    // res.send('Hello World');
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

//porta 3000 localhost
app.listen(3000);