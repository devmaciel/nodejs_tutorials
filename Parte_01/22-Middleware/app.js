//==================================================
// Middleware (custom)

//mesma coisa que as aulas do joi e body-parser.
//middleware fica entre a request e response.

//Requires..
//Middlewares (app.use)
// app.use((req,res,next)=>{  //famosa req, res e um método middleware chamado next() que criamos.
//     console.log(req.url,req.method);
//     next();
// });
app.use((req,res,next)=>{  
    req.banana = 'banana';
    next();
});

//Rotas
// app.get('/exemplo',(req,res)=>{
//     res.send('MiddleWare');
// })
app.get('/',(req,res)=>{
    console.log(req.banana);
    res.send('MiddleWare');
})
//Listen Server