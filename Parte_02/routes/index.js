var express = require('express');
var router = express.Router();

//Require de onde está a lógica das rotas.
let index = require('../controllers/index');

/* GET home page. */
router.get('/', index.index);

module.exports = router;