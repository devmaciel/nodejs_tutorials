exports.show_login = function(req,res,nex) {
    res.render('user/login', { formData: {}, erros: {} });
}

exports.show_signup = function(req,res,nex) {
    res.render('user/signup', { formData: {}, erros: {} });
}