//Dependencias
const express      = require('express');
const MongoClient  = require('mongodb').MongoClient;
const bodyParser   = require('body-parser');
const app          = express();

//Database
const db = require('./config/db');

//Server
const port = 8000;

//Middlewares
app.use(bodyParser.urlencoded({ extended : true }));

//Conexão Database, versão antiga
// MongoClient.connect(db.url, (err, database) =>{
//     if (err) return console.log(err)
//     //Rotas, Server
//     require('./app/routes')(app, database);
//     app.listen(port, () => {
//         console.log("Server na porta: " + port);
//     });
// })

//Conexão Database, adaptação 2020
MongoClient.connect(db.url, { useUnifiedTopology: true }, (err,client)=>{
    var db=client.db('notes');
    if(err){
        return console.log(err);
    }
    require('./app/routes')(app,db);
    app.listen(port, ()=> {
        console.log("Server na porta: "+ port);
    })
})