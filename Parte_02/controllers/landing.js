//Lógica das Routers.. vem da index.js/routes

//Sequelize
const models = require('../models');

//=====================================================
//Landing Page
exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Curso ExpressJS & NodeJS' });
}

exports.submit_lead = function(req, res, next) {
  // console.log("lead email:", req.body.lead_email);

  //Salvar na database com sequelize
  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead =>{
    res.redirect('/leads');
  })

}

exports.show_leads = function(req, res, next) {
  models.Lead.findAll().then(leads =>{
    res.render('landing', {title: 'Curso ExpressJS & NodeJS', leads: leads});
  })
}

exports.show_lead = function(req, res, next) {

  return models.Lead.findOne({
    where: {
      id: req.params.lead_id
    }
  }).then(lead =>{
    res.render('lead', { lead: lead });
  });
}

//=====================================================
// 