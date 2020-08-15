//Require Dependencies
let express = require('express');
let router = express.Router();

//Rotas
// router.get('/person', (req, res) => {
//     res.send('teste');
// });

//Parametros no request object
// localhost:8000/person/name
router.get('/person/:name', (req, res) => {
    res.send(`Request: ${req.params.name}`);
});


//QueryString, propriedade da query do objeto requisitado
// localhost:8000/person?name=ALGUMACOISA&param=OUTRACOISa
router.get('/person', (req, res) => {
    if(req.query.name){
        res.send(`Request: ${req.params.name}`);
    }else{
        res.send('Request na person');
    }
});

//
router.get('/error', (req, res) =>{
    throw new Error('Página que força um erro');
})


module.exports = router;