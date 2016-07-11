'use strict';
/**
 * Created by kanziw on 2016. 4. 21..
 */

const when = require('when');
const _ = require('underscore');
const str = 'const str not in zzzzzzzzz!';

exports.handler = (event, context, callback) => {
  console.log(Object.keys(event));

  _.range(5).forEach((d, i) => console.log(d, i));

  console.log(str);
  console.log(callback);
};
