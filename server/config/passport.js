//jshint esversion:6

const localStrategy_user = require('passport-local').Strategy;
const localStrategy_emp = require('passport-local').Strategy;
const User = require('../model/user');
const configAuth = require('./auth');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup-user', new localStrategy_user({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    function(req, email, password, done) {

      process.nextTick(function() {
        const username = req.body.username;
        User.findOne({
          'Email': email
        }, function(err, user) {
          if (err)
            return done(err);
          if (user) {
            return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
          } else {
            var newUser = new User();
            newUser.Email = email;
            newUser.Name = username;
            newUser.local.password = newUser.generateHash(password);
            newUser.loginType = 'local';
            newUser.save(function(err) {
              if (err)
                throw err;
              return done(null, newUser);
            });
          }
        });
      });
    }));

    passport.use('local-signup-emp', new localStrategy_emp({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      },
      function(req, email, password, done) {

        process.nextTick(function() {
          const username = req.body.username;
          User.findOne({
            'Email': email
          }, function(err, user) {
            if (err)
              return done(err);
            if (user) {
              return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {
              var newUser = new User();
              newUser.Email = email;
              newUser.Name = username;
              newUser.local.password = newUser.generateHash(password);
              newUser.loginType = 'local';
              newUser.isEmployee=true;
              newUser.save(function(err) {
                if (err)
                  throw err;
                return done(null, newUser);
              });
            }
          });
        });
      }));

  passport.use('local-login-user', new localStrategy_user({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true
    },
    function(req, username, password, done) {
      User.findOne({
        'Email': username
      }, function(err, user) {
        if (err)
          return done(err);

        if (!user)
          return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

        if (!user.validPassword(password))
          return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
        return done(null, user);
      });
    }));

    passport.use('local-login-emp', new localStrategy_emp({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
      },
      function(req, username, password, done) {
        User.findOne({
          'Email': username
        }, function(err, user) {
          if (err)
            return done(err);

          if (!user)
            return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

          if (!user.isEmployee)
            return done(null, false, req.flash('loginMessage', 'Not an Employee.'));

          if (!user.validPassword(password))
            return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
          return done(null, user);
        });
      }));
};
