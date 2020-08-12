//=====================================
let models = require("../models");
let bcrypt = require('bcrypt');

const passport = require("passport");
const myPassport = require('../passport_setup')(passport);
let flash = require('connect-flash');

const { isEmpty } = require('lodash');
const { validateUser } = require('../validators/signup');

const generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// GET
exports.show_login = function(req,res,nex) {
    res.render('user/login', { formData: {}, erros: {} });
}

exports.show_signup = function(req,res,nex) {
    res.render('user/signup', { formData: req.body, erros: {} });
}

//RE RENDER FUNCTION
const rerender_signup = function(errors,req,res,nex) {
    res.render('user/signup', { formData: {}, erros: errors });
}

//==================================
// POST
// utilizar package do passportjs pra autenticação
exports.signup = function(req,res,nex) {
    let errors = {};
    return validateUser(errors, req).then(errors=>{
        if(!isEmpty(errors)){
            rerender_signup(erros,req,res,next);
        } else {
            return models.User.findOne({
                where: {
                    is_admin: true
                }
            }).then(user=>{
                let newUser;
                if(user !== null){
                        newUser = models.User.build({
                        email: req.body.email,
                        password: generateHash(req.body.password)
                    });
                } else {
                        newUser = models.User.build({
                        email: req.body.email,
                        password: generateHash(req.body.password),
                        is_admin = true
                    });
                }
                
                return newUser.save().then(result =>{
                    passport.authenticate('local', {
                        successRedirect: "/",
                        failureRedirect: "/signup",
                        failureFlash: true
                    })(req,res,next);
                })
            })
        }
    })
}

exports.login = function(req,res,nex) {
    passport.authenticate('local', {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true
    })(req,res,next);
}

exports.logout = function(req,res,nex) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
}