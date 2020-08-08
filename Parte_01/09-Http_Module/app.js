//========================
// Criar Web Server com Node

//library
const http = require('http');

//criar server, request/response
const server = http.createServer((req, res) => {
    
    //como se fosse a home. é preciso sempre dar end na response.
    if(req.url == '/'){
        res.write('Olá do NodeJS');
        res.end();
    }else{
        res.write('Usando outro domínio');
        res.end();
    }

});

//porta do server, 3000.
server.listen('3000');