// 생성자, constructor
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name;
    }
}
var p1 = new Person('egoing');
console.log(p1.introduce());

var p2 = new Person('leezche');
console.log(p2.introduce());


// 전역 객체
function func(){
    // console.log(this);
}
func();


// this
var o = {
    func : function(){
        if(o === this){
            console.log("o === this");
        }
    }
}
o.func();

var funcThis = null;
function Func(){
    funcThis = this;
}
var o2 = new Func();
if(funcThis === o2){
    console.log('funcThis === o2');
}

var o = {}
var p = {}
function func(){
    switch(this){
        case o:
            console.log('type : o');
            break;
        case p:
            console.log('type : p');
            break;
        default:
            console.log('type : default');
            break;
    }
}
func();
func.apply(o);
func.apply(p);


// 상속, inheritance
function Person2(name){
    this.name = name;
}
Person2.prototype.name=null;
Person2.prototype.introduce = function(){
    return 'My name is '+this.name;
}

function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person2();
Programmer.prototype.coding = function(){
    return "hello world";
}

var p1 = new Programmer('egoing');
console.log(p1.introduce());
console.log(p1.coding());


// prototype, 원형
function Ultra(){}
Ultra.prototype.ultraProp = "Ultra Power!!";

function Super(){}
Super.prototype = new Ultra();

function Sub(){}
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp);


// Array 객체(기본 객체) rand()(함수) 의 재정의
Array.prototype.rand = function(){
    var index = Math.floor(this.length*Math.random());
    return this[index];
}
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
var arr2 = ['seoul','new york','ladarkh','pusan', 'Tsukuba'];
// -> 일단 결과는 같은데 그냥 [] 로 만든 것도 new와 똑같은 의미인지는 불명
console.log(arr.rand());
console.log(arr2.rand());


// Object, 모든 객체의 조상
Object.prototype.contain = function(neddle) {
    for(var name in this){
        if(this[name] === neddle){
            return true;
        }
    }
    return false;
}
var o = {'name':'egoing', 'city':'seoul'}
console.log(o.contain('egoing'));
var a = ['egoing','leezche','grapittie'];
// 배열의 경우 for(in) 으로 돌리면 인덱스가 key로 들어간다.
console.log(a.contain('leezche'));

for(var name in o){
    console.log(name);
}
// 모든 객체에 contain이라는 함구 객체가 들어가기 때문에 잘 사용해야
for(var name in o){
    if(o.hasOwnProperty(name))
        console.log(name);
}


// 데이터 타입, data type
var str = 'coding';
console.log(str.length);        // 6
console.log(str.charAt(0));     // "c"
var str2 = 'coding';
str2.prop = 'everybody';
console.log(str2.prop);      // undefined, 객체가 아니기에 저장되지 않음


// 참조, reference
var a1 = 1;
var b1 = a1;
b1 = 2;
console.log(a1); // 1

var a2 = {'id':1};
var b2 = a2;
b2.id = 2;
console.log(a2.id);  // 2

var s1 = "haha";
var s2 = s1;
s2 = "hoho";
console.log(s1)     // haha
// = 하는 대상이 데이터 타입이면 복사, 객체면 참조가 된다.

var a3 = {'id':1};
function func3(b3){
    b3 = {'id':2};
}
func3(a3);
console.log(a3.id);  // 1

var a4 = {'id':1};
function func4(b4){
    b4.id = 2;
}
func4(a4);
console.log(a4.id);  // 2
