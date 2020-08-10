//==========================================================
// User Input Validation with EXPRESS and JOI

//mesma coisa que antes

/**
 * npm install express
 * npm install body-parser
 * npm install joi
 * npm node app (ctrl^C termina server)
 */

// o resultado é o mesmo da aula (17), mas agora passamos como JSON.

const express = require('express');
const path = require('path');
const Joi = require('joi');
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

    //criar schema pra validação com JOI

    //VERSAO ANTIGA DO VIDEO
    // const schema = Joi.object().keys({
    //     //RULES
    //     email: Joi.string().trim().email().required(),
    //     password: Joi.string().trim().min(5).max(10).required()
    // });

    // Joi.validate(req.body,schema,(err, result)=>{
    //     if(err){
    //         console.log(err); //o erro que ocorreu
    //         res.send('Ocorreu um erro em algum dos campos');
    //     }

    //     //caso não haja erro...
    //     console.log(result); //data que passamos, request.body
    //     res.send('Posted Data');
    // });

    //VERSÃO ^.v16
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().trim().min(5).max(10).required()
    });

    const validation = schema.validate(req.body, (err,result)=>{
        if(err){
            console.log(err); //o erro que ocorreu
            res.send('Ocorreu um erro em algum dos campos');
        }

        //caso não haja erro...
        console.log(result); //data que passamos, request.body
        res.send(validation);
    });

    res.json({success: true});
});

//porta 3000 localhost
app.listen(3000);