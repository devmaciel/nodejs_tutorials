//Requires
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const { json } = require('body-parser');
const MongoClient = mongodb.MongoClient;
const URI = process.env.MONGODB_URI || 'mongodb://localhost/database'; //ou heroku mongodb_uri
const PORT = process.env.PORT || 8000; 
const DB_NAME = process.env.DB_NAME //heroku uri, vai ter o nome da database

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.search(bodyParser.json());

//Routes - GET
app.get('/secret', (req,res) => {
    res.sendFile(path.join(__dirname, 'secret.html'));
}); 

//POST e conecta no mongodb e insere na db
app.post('/secret', (req,res) => {
    MongoClient.connect(URI, { useNewUrlParser: true }, (err, client) => {
        if(err){
            console.log(err);
        }else{
            const db = client.db(DB_NAME);
            const collection = db.collection('names');
            const entry = {
                name: req.body.name.toLowerCase(),
                card: req.body.number + '_of_' + req.body.suit
            }

            collection.insertOne(entry, (err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send('Inserted into database');
                }
            });

            client.close();
        }
    });
});

//param name que aparece pro usuário com nome dele
app.get('/:param*', (req, res) => {
    const name = req.url.slice(1).toLowerCase();

    MongoClient.connect(URI, { useNewUrlParser: true }, (err, client) => {
        if(err){
            console.log(err);
        }else{
            const db = client.db(DB_NAME);
            const collection = db.collection('names');

            //urls
            if(name === 'deleteall'){
                collection.remove({});
                res.send('database reset'); 
            }else{
                collection.find({name: name}).toArray((err, result) => {
                    if(err){ //errp
                        console.log(err);
                    }else if(result.length) { //existe
                        const card = result[result.length-1].card + '.png';
                        res.sendFile(path.join(__dirname + '/cards/' + card));
                    }else{ //===0 n existe
                        res.sendStatus(404);
                    }

                    client.close()
                });
            }
        }
    });
});

//PORT
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));