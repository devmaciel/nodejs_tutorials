let models = require('../models');

let validator = require('validator');


const validateCreateUserFields = function(errors, req) {
	if (!validator.isEmail(req.body.email)) {
		errors["email"] = "Por favor, insira um email válido.";
	}
	if (!validator.isAscii(req.body.password)) {
		errors["password"] = "Caracteres inválido na senha, tente novamente";		
	}
	if (!validator.isLength(req.body.password, {min: 8, max: 25})) {
		errors["password"] = "A senha precisa ter pelo menos 8 caracteres.";
	}
}

exports.validateUser = function(errors, req) {
	return new Promise(function(resolve, reject) {
		validateCreateUserFields(errors, req);
		return models.User.findOne({
			where: {
				email: req.body.email
			}
		}).then(u => {
			if (u !== null) {
				errors["email"] = "Email já cadastrado, entre ou resete sua senha.";
			}
			resolve(errors);
		})
	})
}