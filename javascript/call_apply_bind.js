'use strict';

var _ = require('underscore');

var shoppingCart = (function(){
  var _calculatePrice = function () {
    return this.price * this.amount;
  };

  return {
    calculatePrice : _calculatePrice,
  };
})();

var goods = {
  name: 'hammer',
  price: 199,
  amount: 2
};

console.log(shoppingCart.calculatePrice.call(goods));

var fx = function (arg1, arg2) {
  console.log(this, arg1, arg2);
  console.log(this.id, this.name, arg1, arg2);
  console.log(typeof this);
  console.log(_.keys(this));
};

// fx.call({id : 1, name : 'kanziw'}, 'first params', 'second params');
// fx.apply({id : 1, name : 'kanziw'},[ 'first params', 'second params']);

var fxbound = fx.bind({id : 1, name : 'kanziw'}, 'first params', 'second params');
fxbound();
// console.log(fxbound);
