var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var db = require('./routes/db');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/db', db);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


var http = require('http');
app.set('port', 3000);
var server = http.createServer(app);
server.listen(app.get('port'));



console.log("My Server is ready at port :", app.get('port'))

//var mysql      = require('mysql');
//var connection = mysql.createConnection({
//  host     : '127.0.0.1',
//  user     : 'node',
//  password : 'a',
//  database : 'expressjs_bbs'
//});
//
//function sampleTest (){
//  connection.connect();
//
//  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//    if (err) throw err;
//
//    console.log('The solution is: ', rows[0].solution);
//  });
//
//  connection.end();
//}
//
//sampleTest();


//var mysql = require('./model/db_cofig.js');
//mysql.sampleTest();
//var mysql = require('./model/db_config');
module.exports = app;
