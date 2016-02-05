'use strict';

var co = require('co');
var redis = require('redis');


var options = {
  host: '127.0.0.1',  // default
  port: '6370',       // default
};

var subscriber = redis.createClient(options);
var publisher = redis.createClient(options);

var list = [];
subscriber.on('message', function (channel, message) {
  console.log(`Message '${message}' on channel '${channel}' arrived!`);
  // list.push(message);
  // if (list.length === 5) {
  //   // do something
  //   console.log(list);

  //   subscriber.end();
  //   publisher.end();
  // }
});

subscriber.subscribe('test');

publisher.publish('test', 'haaaaai');
publisher.publish('test', 'kthxbai');
