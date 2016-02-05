'use strict';

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    console.log('location:', req.protocol + '://' + req.hostname + req.baseUrl + ' | Time:', Date.now());
    next();
});


router.get('/', function (req, res) {
    res.send('Hello World!');
});

router.post('/', function (req, res) {
    res.send('Got a POST request');
});

router.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

router.get('/user', function (req, res) {
    res.send('Got a GET request at /user');
});

router.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});

router.use(express.static('public'));

router.all('/secret', function (req, res, next) {
    res.send('You don\'t have permission');
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
});

router.get('/example/a', function (req, res) {
    res.send('Hello from A!');
});

router.get('/example/b', function (req, res, next) {
    console.log('response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello from B!');
});

var c0 = function (req, res, next) {
    console.log('C0');
    next();
}
var c1 = function (req, res, next) {
    console.log('C1');
    next();
}
var c2 = function (req, res) {
    res.send('Hello from C!');
}
router.get('/example/c', [c0, c1, c2]);


var d0 = function (req, res, next) {
    console.log('D0');
    next();
}
var d1 = function (req, res, next) {
    console.log('D1');
    next();
}
router.get('/example/d', [d0, d1], function (req, res, next) {
    console.log('response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello from D!');
});

module.exports = router;