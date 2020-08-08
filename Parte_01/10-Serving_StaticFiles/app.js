//============================================
// Servir Arquivos Estáticos com HTTP Modules

//http e filesystem
const http = require('http');
const fs = require('fs');

http.createServer((req, res) =>{

    //vai ler o arquivo html
    const readStream = fs.createReadStream('./index.html');
    
    //HTTP Verbos (status), 200 = Sucesso/OK, e passar o type.
    //existem vários types, então tem que dar uma olhada.
    // text/html - application/json - image/png foi oq passou na aula
    res.writeHead(200,{'Content-type': 'text/html'});

    //enviar pra onde? pipe na response
    readStream.pipe(res);

}).listen(3000);