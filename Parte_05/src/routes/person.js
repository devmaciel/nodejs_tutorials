//Require Dependencies
let express = require('express');
let router = express.Router();

let personRoute = require('./routes/person');

//Middlewares
applicationCache.use(personRoute);

//Rotas
router.get('/person', (req, res) => {
    res.send('teste');
});

module.exports = router;