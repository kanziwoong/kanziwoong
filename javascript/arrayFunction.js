'use strict'

var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];
var a2 = a.map(function(s){ return s.length });
var a3 = a.map( s => s.length );

console.log(a);
console.log(a2);
console.log(a3);
console.log("=======================");

let empty = () => {};
console.log(empty);     // [Function]
console.log((() => "foobar")()) // returns "foobar"
console.log("=======================");

var min = a => a > 15 ? 15 : a;
console.log(min(16));       // 15
console.log(min(10));       // 10
let max = (a, b) => a > b ? a : b;
console.log(max(3, 7));     // 7
console.log(max(99999, 2)); //  99999
console.log("=======================");

// Easy array filtering, mapping, ...
var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b);  // 66
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]

console.log(sum);
console.log(even);
console.log(double);
console.log("=======================");
