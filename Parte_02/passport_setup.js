let LocalStrategy = require('passport-local').Strategy;

let bcrypt = require('bcrypt');
let models = require('./models');

const validPassword = function(user,password){
    return bcrypt.compareSync(password,user.password);
}

module.exports = function(passport){
    passport.serializeUser(function(user, done){
        done(null, user.id)
    });
    passport.deserializeUser(function(id, done){
        models.User.findOne({
            where: {
                'id' : id
            }
        }).then(user =>{
            if(user == null){
                done(new Error('User ID inválido'));
            }
            done(null, user);
        })
    });

    //Auth function, login submit form post
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, 
    function(email, password, done) {
        return models.User.findOne({
            where: {
                'email' : email
            },
        }).then(user =>{ //validação/verificação email
            if(user == null){
                req.flash('message', 'Credenciais Incorretas');
                return done(null,false);
            } else if (user.password == null || user.passowrd == undefined) {
                req.flash('message', 'Você precisa resetar sua senha');
                return done(null,false);
            } else if(!validPassword(user,password)) {
                req.flash('message', 'Credenciais Incorretas');
                return done(null,false);
            }
            
            return done(null,user);
        }).catch(err =>{
            done(err,false);
        })
    }))
}