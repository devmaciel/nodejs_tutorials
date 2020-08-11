//Lógica das Routers.. vem da index.js/routes
exports.index = function(req, res, next) {
  res.render('index', { title: 'Curso ExpressJS & NodeJS' });
}