//Lógica das Routers.. vem da index.js/routes
exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Curso ExpressJS & NodeJS' });
}