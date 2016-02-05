/**
 * Created by kanziw on 2016. 1. 1..
 */
'use strict';


// db_connect_object.js
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

var client = new MongoClient(new Server('localhost', 27017, {
  socketOptions: {connectTimeoutMS: 500},
  poolSize: 5,
  auto_reconnect: true
}, {
  numberOfRetires: 3,
  retryMilliSeconds: 500
}));

client.open(function (err, client) {
  if (err) {
    console.log("Connection Failed Via Client Object");
  } else {
    var db = client.db("testDB");
    if (db) {
      console.log("Connected Via Client Object . . .");
    }
    db.authenticate("dbadmin", "test", function (err, results) {
      if (err) {
        console.log("Authentication failed");
        client.close();
        console.log("Connection closed");
      } else {
        console.log("Authenticated Via Client Object . . . ");
        db.logout(function (err, result) {
          if (!err) {
            console.log("Logged out via Client Object . . .");
          }
          client.close();
          console.log("Connection closed");
        });
      }
    });
  }
});
