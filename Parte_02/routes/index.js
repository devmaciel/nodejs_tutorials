var express = require('express');
var router = express.Router();

//Require de onde está a lógica das rotas.
let landing = require('../controllers/landing');

/* GET home page. */
router.get('/', landing.get_landing);

module.exports = router;