var mysql      = require('mysql');
var connection = mysql.createConnection({
    //host     : '192.168.56.7',
    host     : '127.0.0.1',
    user     : 'node',
    password : 'a',
    database : 'expressjs_bbs'
});
//
//var getConnection = function () {
//    function sampleTest (){
//      connection.connect();
//
//      connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//        if (err) throw err;
//
//        console.log('The solution is: ', rows[0].solution);
//      });
//
//      connection.end();
//    }
//}

module.exports = connection;