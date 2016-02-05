// 변수, variable
var aaa = 2; //숫자
var bbb = "2"; //문자
var bbb = '2'; //얘도 문자
var ccc = true; //얘는 불린
var ddd = [1, 2, 3, 4]; //얘는 배열
var eee = { p1 : 2, p2 : '2' }; //얘는 객체
var fff = null; //null
var ggg = undefined; //undefined
var hhh = function(){ console.log('ㅋㅋㅋ'); } //얘는 함수!!
hhh()


// 수학, 정수, math
console.log(
    Math.pow(3,2),       // 9,   3의 2승
    Math.round(10.6),    // 11,  10.6을 반올림
    Math.ceil(10.2),     // 11,  10.2를 올림
    Math.floor(10.6),    // 10,  10.6을 내림
    Math.sqrt(9),        // 3,   3의 제곱근
    Math.random()       // 0부터 1.0 사이의 랜덤한 숫자
);


// 속성, type, typedef
console.log(
    typeof 1,
    typeof "1"
);


// 문자열, string
console.log(
    'kanziw\'s javascript\n',
    "javascript\nworld\n",
    "have a " + "nice day\n",
    'hihello'.length
);


// 비교, equal
console.log(
    1 == 1,             // true
    1 == "1",           // true
    1 === "1",          // false

    null == undefined,  // true
    null === undefined, // false
    true == 1,          // true
    true === 1,         // false
    true == '1',        // true
    true === '1',       // false
    0 === -0,           // true
    NaN === NaN        // false
);


// if, while, for
var a;
if(!'' && !undefined && !a && !null && !NaN){
    console.log('조건문의 경우가 모두 false임');
}

var i = 0;
var sum = 0;
while(i < 10){
    sum += ++i;
}
console.log(sum);

sum = 0;
for(i = 1; i <= 10; i++){
    if(i == 2) continue;
    sum += i;
    if(i == 5) break;
}
console.log(sum);


// function numbering(){
var numbering = function (){
    i = 0;
    while(i < 10){
        console.log(i);
        i += 1;
    }
}
numbering();


// list, 배열
var li = ['a', 'c', 'z'];
li.push('d');
li.concat('e', 'f');
li.unshift('-a');
console.log(li);
li.splice(2, 1, 'B');   // 2번째부터 1개를 삭제 후 'B'를 삽입
console.log(li);

console.log(
    li.shift(),
    li.pop(),
    li.sort()
);
console.log(li.reverse());


// 객체, object
var grades = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;
// var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80}

for(key in grades) {
    console.log("key : "+key+" | value : "+grades[key]);
}

grades = {
    'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
    'show' : function(){
        for(var name in this.list){
            console.log(name+':'+this.list[name]);
        }
    }
};
grades.show();