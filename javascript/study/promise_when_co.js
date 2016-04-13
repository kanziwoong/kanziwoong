/**
$ npm install when
$ npm install co
*/
var when = require('when');
var co = require('co');

function waitSeconds(sec, ret) {
  var df = when.defer();
  setTimeout(function () {
    df.resolve(99999);
  }, sec * 1000);
  return df.promise;
}

co(function *() {
  try {
    var ret = yield waitSeconds(1, 100);
  } catch (ex) {
    console.error(ex);
  }
  console.log(ret);
});

console.log(Math.floor((Math.random() * 100)));
