var express = require('express');
var router = express.Router();

//Require de onde está a lógica das rotas.
let landing = require('../controllers/landing');

/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);

//lead
router.get('/leads', landing.show_leads);
router.get('/lead/:lead_id', landing.show_lead);

module.exports = router;