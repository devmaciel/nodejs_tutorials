//=====================================
// GEt
exports.show_login = function(req,res,nex) {
    res.render('user/login', { formData: {}, erros: {} });
}

exports.show_signup = function(req,res,nex) {
    res.render('user/signup', { formData: {}, erros: {} });
}

//==================================
// POST
// utilizar package do passportjs pra autenticação
exports.signup = function(req,res,nex) {
    
}

exports.login = function(req,res,nex) {
    
}