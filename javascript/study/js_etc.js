// 출처 : http://programmingsummaries.tistory.com/
// 추천 링크
// https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures



// 재귀함수와 arguments.callee
// arguments.callee는 스스로의 함수를 호출
function factorial(x) {
    if(x<=1) {
        return 1;
    }
    else {
        return x*arguments.callee(x-1);
    }
}
console.log(factorial(5))


// 멤버 관리 구조와 prototype
function Person(name) {
    var firstName = "홍";
    this.name = name;
    this.speak = function(){ console.log(firstName + this.name); }
}

console.log(Person.firstName); //undefined 접근할 수 없다.

var p = new Person("길동"); //객체 생성
console.log(p.firstName); //undefined 역시 접근할 수 없다.
console.log(p.name); //"길동" 접근 가능하다.

Person.prototype.tellme = function(){ console.log('zzz'); }; //메서드 추가!!
console.log(p.tellme()); //zzz라는 팝업이 뜬다!! 즉 객체 프로토타입 변경 가능!!

console.log(p["firstName"]); //undefined 마찬가지로 접근할 수 없다.
console.log(p["name"]); //"길동" 접근 가능하다.


// 멤버 확장
Object.prototype.extend = function(parent) {
    for(var property in parent) {
        this[property] = parent[property];
    }
};


// Max & min
var test = [0, 77, 33, 11, 99, 88, 55];
console.log(Math.max.apply(null, test)); //결과값은 99
console.log(Math.min.apply(null, test)); //결과값은 0

var max = test.reduce( function (previous, current) {
    return previous > current ? previous:current;
});
//최소값
var min = test.reduce( function (previous, current) {
    return previous > current ? current:previous;
});
console.log("max :", max, "| min :", min)


// 배열 복사, 객체를 가진 경우엔 조심해야 함
var aaa = [0, 1, 2, 3, 4, 5];
var bbb = JSON.parse(JSON.stringify( aaa )); //참조없는 복사
var aaaa = [0, 1, 2, 3, 4, 5];
var bbbb = aaaa.slice(); //indexOf 혹은 contains로 검색 가능


// 배열 함수 : http://programmingsummaries.tistory.com/357
// Array.forEach
var testArray = ["aaa", "bbb", "ccc", "ddd"];
//배열의 모든 요소에 EDIT라는 문자열을 더하기
//메서드 수행 후 리턴값은 undefined
testArray.forEach(function (item, index, array) {
    array[index] = item + "EDIT";
});
console.log(testArray);

// Array.some
var testArraySome = ["aaa", "bbb", "ccc", "ddd"];
//배열의 중에서 "bbb"가 있으면 true를 리턴
//메서드 수행 중 true가 리턴되면 메서드 수행을 중단하고 true를 리턴
console.log(testArraySome.some(function (item, index, array) {
    console.log(index + "번째 요소 : " + item);
    return !!~item.search("bbb");
}));
//true를 리턴하는 콜백이 있었으므로 리턴값은 true

// Array.every
var testArray = ["aaa", "bbb", "ccc", "ddd"];
//배열의 모든 요소에 "aaa"가 있으면 true를 리턴
//메서드 수행 중 false가 리턴되면 메서드 수행을 중단하고 false를 리턴
console.log(testArray.every(function (item, index, array) {
    console.log(index + "번째 요소 : " + item);
    return !!~item.search("aaa");
    // return !!~item.search(/[a-z]+/);  -> true
}));
//false를 리턴하는 콜백이 있었으므로 리턴값은 false

// Array.filter
var testArray = ["aaa", "bbb", "ccc", "ddd"];
//배열의 요소가 a 또는 b로 이루어져 있으면 추출
//메서드가 종료되면 추출된 요소로만 이루어진 새로운 배열을 리턴
var newArray = testArray.filter(function (item, index, array) {
    return !!~item.search(/[ab]+/);
});
console.log(testArray);
console.log(newArray);

// Array.reduce
var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//각 콜백마다의 리턴값을 previousItem 으로 넘겨받아 어떤 작업을 수행
//메서드가 종료되면 마지막 콜백의 리턴값을 리턴
var result = testArray.reduce(function (previousItem, currentItem, index, array) {
    //반환된 결과는 다음번 콜백의 첫번째 파라메터로 다시 전달된다.
    return previousItem + currentItem;
}, 0);
console.log(testArray);
console.log(result);


// setTimeout function
setTimeout(console.log("setTimeoutTest - Start"), 1000);
console.log("setTImeoutTest - End")
/**
1초 후에 "setTImeoutTest - End" 이 뜰 것 같지만 그렇지 않다.
*/
