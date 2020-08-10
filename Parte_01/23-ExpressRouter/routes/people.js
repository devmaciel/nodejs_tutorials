//require na router library do express
const express = require('express');
const route = express.Router();

//middleware
route.use((req,res,next)=>{
    console.log('usando middleware custom em todas estas rotas.');
    next();
});

route.get('/',(req,res)=>{
    res.send('estamos na rota principal');
})

route.get('/contatos',(req,res)=>{
    res.send('estamos na rota contatos');
})

//exportar
module.exports = route;

