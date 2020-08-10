//===========================================================
// Trabalhando com Express Router  

//como sempre, toda aquela estrutura da aula do JOI, de express routes, middlewares.
//entao aqui só pegar o conteúdo da aula para facilitar.
//vamos trabalhar com uma pasta diferente para as rotas.

//Requires

//Middlewares

//Set engine ejs

//Routes
const people = require('./routes/people');
app.use('/people',people); // /people vai entrar no people.js e suas rotas.

//LISTEN