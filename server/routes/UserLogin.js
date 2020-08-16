//jshint esversion:6

var {
  User
} = require('../model/user');

module.exports = function(app, passport) {
app.post("/login-user", (req, res, next) => {
  passport.authenticate("local-login-user", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

app.post("/signup-user", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});
};
// app.post('/login-user', passport.authenticate('local-login-user', {
//   successRedirect: '/', // redirect to the secure profile section
//   failureRedirect: '/login-user', // redirect back to the signup page if there is an error
//   failureFlash: true // allow flash messages
// }));

// app.post('/login-emp', passport.authenticate('local-login-emp', {
//   successRedirect: '/organization-emp', // redirect to the secure profile section
//   failureRedirect: '/login-emp', // redirect back to the signup page if there is an error
//   failureFlash: true // allow flash messages
// }));

// app.post('/signup-user', passport.authenticate('local-signup-user', {
//   successRedirect: '/profile', // redirect to the secure profile section
//   failureRedirect: '/signup-user', // redirect back to the signup page if there is an error
//   failureFlash: true // allow flash messages
// }));

// app.post('/signup-emp', passport.authenticate('local-signup-emp', {
//   successRedirect: '/profile', // redirect to the secure profile section
//   failureRedirect: '/signup-emp', // redirect back to the signup page if there is an error
//   failureFlash: true // allow flash messages
// }));
