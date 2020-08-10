//===========================================================
// HTTP Post Request (express) e Body Parser Module

//requires
const express = require('express');
const path = require('path');
const app = require('app');

const bodyParser = require('body-parser');

//da aula passada, nossa pasta. middlewares
app.use('/public',express.static(path.join(__dirname,'static')));

//pega a data parseada que precisamos pro request pra passar por post
app.use(bodyParser.urlencoded({extended: false}));

//rota
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

//rota pro post
app.post('/', (req,res)=>{
    console.log(req.body); //object{email:'',password:''}
    //database work here
    res.send('Sucesso da POST Data');
});

/**
 * precisa instalar o body parser
 * npm install body-parser
 * vamos utilizar middlewares, com 'app.use'
 */