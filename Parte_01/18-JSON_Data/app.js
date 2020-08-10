//=================================================
// JSON Data - Express && Body Parser

//Aqui seria os mesmos arquivos da aula passada, porém vamos passar JSON Data ao invés de string.

/**
 * npm install express
 * npm install body-parser
 * npm node app (ctrl^C termina server)
 */

// o resultado é o mesmo da aula (17), mas agora passamos como JSON.

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

//middlewares
app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

//rota HOME
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

//rota pro post
app.post('/', (req,res)=>{
    console.log(req.body); //object{email:'',password:''}
    res.json({success: true});
});

//porta 3000 localhost
app.listen(3000);