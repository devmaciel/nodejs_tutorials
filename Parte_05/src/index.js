//Requires Dependencies
let express = require('express');
let app = express();
let personRoute = require('./routes/person');
let path = require('path');

//Middlewares
app.use((req,res,next) =>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    // res.send('quebra pipeline, next()');
    next();
});
app.use(personRoute);
app.use(express.static('public'));

//handler 404
app.use((req,res,next) =>{
    res.status(404).send('Você está perdido?');
});

//hander 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'));
});

//Port
const PORT = process.env.PORT || 8000; //8000 ou 3000 geralmente
app.listen(PORT, () => console.info(`Server started on ${PORT}`));