//Lógica das Routers.. vem da index.js/routes

//Landing Page
exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Curso ExpressJS & NodeJS' });
}

exports.submit_lead = function(req, res, next) {
  console.log("lead email:", req.body.lead_email);
  res.redirect('/');
}