// 모듈, module
var circle = require('./node.circle.js');
console.log( 'The area of a circle of radius 4 is ' + circle.area(4));


// 정규표현식, regular expression
// 시각화 해주는 사이트 : http://regexper.com/
// 정규표현식 실습 : http://www.regexr.com/
var pattern = /a/
// var pattern = new RegExp('a');
console.log(pattern.exec('abcdef')); // ["a"]
console.log(pattern.exec('bcdefg')); // null
console.log(pattern.test('abcdef')); // true
console.log(pattern.test('bcdefg')); // false
console.log('abcdef'.match(pattern)); // ["a"]
console.log('bcdefg'.match(pattern)); // null
console.log('abcdef'.replace(pattern, 'A'));  // Abcdef

var xi = /a/;
console.log("Abcde".match(xi)); // null
var oi = /a/i;
console.log("Abcde".match(oi)); // ["A"];

var xg = /a/;
console.log("abcdea".match(xg));
var og = /a/g;
console.log("abcdea".match(og));

var pattern = /(\w+)\s(\w+)/;
var str = "coding everybody";
var result = str.replace(pattern, "$2, $1");
console.log(result);

var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});

console.log(result);



// 함수, function, 유효 범위
for(var i = 0; i < 1; i++){
    var name = 'coding everybody';
}
console.log(name);

var i = 5;
function a(){
    var i = 10;
    b();
}
function b(){
    console.log(i);
}
a();


// function, value, 값으로서의 함수, 콜백, callback
function cal(func, num){
    return func(num)
}
function increase(num){
    return num+1
}
function decrease(num){
    return num-1
}
console.log(cal(increase, 1));
console.log(cal(decrease, 1));

function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}
console.log(cal('plus')(2,1));
console.log(cal('minus')(2,1));

var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},
    function(input){ return input / 2;}
];
var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}
console.log(input);

var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
console.log(numbers.sort(function (a, b){
    return b-a;
})); // array, [20,10,9,8,7,6,5,4,3,2,1]


// 클로저, closure
function outter(){
    var title = 'coding everybody';
    return function(){
        console.log(title);
    }
}
inner = outter();
inner();

function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

console.log(ghost.get_title());     // Ghost in the shell
console.log(matrix.get_title());    // Matrix

ghost.set_title('공각기동대');
console.log(ghost.get_title());     // 공각기동대
console.log(matrix.get_title());    // Matrix

var movies = {
    'title' : null,
    'get_title' : function (){
        return this.title;
    },
    'set_title' : function(title){
        this.title = title;
    }
}
m1 = movies;
m1.set_title("m1")
console.log(m1.get_title())
console.log(movies.get_title())

var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(id) {
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}


// arguments, 아규먼트
function sum(){
    var _sum = 0;
    for(var i = 0; i < arguments.length; i++){
        // console.log(i+' : '+arguments[i]);
        _sum += arguments[i];
    }
    return _sum;
}
console.log('result : ' + sum(1,2,3,4));


// 매개변수
function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
function one(arg1){
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
function two(arg1, arg2){
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
    return arg1 + arg2
}
zero(); // zero.length 0 arguments 0
one('val1', 'val2');  // one.length 1 arguments 2
two('val1');  // two.length 2 arguments 1


// 함수의 호출, call function
o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum2(){
    var _sum = 0;
    for(name in this){
        _sum += this[name];
    }
    return _sum;
}
console.log(sum2.apply(o1)) // 6
console.log(sum2.apply(o2)) // 185

o1.sum2 = sum2;
console.log(o1.sum2()); // sum 중간에 객체의 타입을 검사하는 과정이 필요
