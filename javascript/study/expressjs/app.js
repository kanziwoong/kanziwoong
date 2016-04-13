'use strict';

var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(3000, '0.0.0.0');

server.on('listening', function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('My app listening at http://%s:%s', host, port);
});

// var server = app.listen(3000, function () {
//   // var host = server.address().address;
//   var host = "localhost";
//   var port = server.address().port;
//   console.log('My app listening at http://%s:%s', host, port);
// });

var rootRoute = require('./rootRoute');
app.use('/', rootRoute);

var birds = require('./birds');
app.use('/birds', birds);
