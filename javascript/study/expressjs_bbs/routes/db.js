var express = require('express');
var router = express.Router();
var connection = require('../model/db_config');

router.get('/', function(req, res, next) {
    //var query = "SELECT 1 + 1 AS solution";
    var query = "SELECT * FROM myblogmember";
    connection.query(query, function (err, rows, fields) {
        if (err) throw err;

        //console.log('The solution is: ', rows[0].solution);

        res.json(rows);
    });
});

module.exports = router;
