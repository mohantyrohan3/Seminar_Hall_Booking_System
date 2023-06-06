var passport = require('passport');
var LocalStrategy = require('passport-local');
const Admin = require('../models/admin');
const { compareSync } = require('bcrypt');

passport.use('admin',new LocalStrategy({
  usernameField: 'email'
},
async function (email, password, done) {
    try{
      const admin = await Admin.findOne({
        email: email
      })

      if (!admin) { return done(null, false); }
      if (!compareSync(password,admin.password)) { return done(null, false); }
      return done(null, admin);
    }

    catch(err){
       return done(err);
    }
    }
  ));





  passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, email: user.email });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });


  module.exports = passport;