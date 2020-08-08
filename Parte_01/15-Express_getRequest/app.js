//==============================
// Express Get Request

const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send('Olá Mundo');
});

app.listen(3000);

app.get('/exemplo', (req,res) =>{
    res.send('estamos na rota exemplo');
})

app.get('/exemplo/:name/:age', (req,res) =>{
    console.log(req.params); //object{name: '', age: ''}

    //query é o get. exemplo
    //exemplo/joao/25
    console.log(req.query); //empty object

    //exemplo/joao/25?formado=nao
    console.log(req.query); //object{name: '', age: ''}
                            //object{formado: 'nao'}
                            //?valor=isso&outrovalor=isto

    // res.send('estamos na rota exemplo com parâmetros');
    res.send(req.params.name + " : " + req.params.age);
});