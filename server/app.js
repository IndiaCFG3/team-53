// jshint esversion:6

require("dotenv").config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const session = require('express-session');
const http = require('http');
const configDB = require('./config/database');
// const verifymail = require('./routes/verifymail');
const cors = require('cors');
mongoose.connect(configDB.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// const { spawn } = require('child_process');

var spawn = require('child_process').spawn,
    py    = spawn('python', ['compute_input.py']),
    data = [1,2,3,4,5,6,7,8,9],
    dataString = '';

py.stdout.on('data', function(data){
  dataString += data.toString();
});
py.stdout.on('end', function(){
  console.log('Sum of numbers=',dataString);
});
py.stdin.write(JSON.stringify(data));
py.stdin.end();

// const childPython = spawn('python', ['--version']);
// const childPython = spawn('python', ['model_py/Employee_Queries.py'],[{'EID':1,'Name':'Adarsh','Role':'HR','Manager':'Nishant','Leaves':3,'Rating':4},{'EID':1,'Name':'Nishant','Role':'Manager','Manager':0,'Leaves':5,'Rating':3}]);

// childPython.stdout.on('data',(data)=>{
//   console.log('stdout:'+data);
// });

// childPython.stderr.on('data',(data)=>{
//   console.error('stderr:'+data);
// });

// childPython.on('close',(code)=>{
//   console.log('child process exited with code : '+code);
// });

require('./config/passport')(passport);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET
}));

app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// require('./routes/UserLogin')(app, passport);
//routes
require('./routes/UserLogin')(app, passport);
app.listen(4000, function(err) {
  console.log('Server started on 4000');
});
