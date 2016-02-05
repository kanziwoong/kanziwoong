/**
출처
http://programmingsummaries.tistory.com/325
http://www.html5rocks.com/ko/tutorials/es6/promises/
*/

//Promise 선언
var _promise = function (param) {
    // Promise 생성자는 2개의 파라메터(resolve와 reject)를 가지는 콜백 하나를 인자로 가진다.
    // 정상 동작하면 resolve를 호출, 아니면 reject를 호출 (규칙)
    return new Promise(function (resolve, reject) {
        // 파라메터가 참이면,
        if (param) {
            // resolove 안에 있는 내용을 return
            resolve("해결 완료");
        }
        // 파라메터가 거짓이면,
        else {
            // rejcet 안에 있는 내용을 return
            reject(Error("실패!!"));
        }
    });
};

//Promise 실행
_promise(true)
.then(function (text) {
    // 성공시
    console.log(text);
}, function (error) {
    // 실패시
    console.error(error);
});

console.log(Error("After Promise"))




function waitOneSecond() {
  return new Promise(function(resolove, reject){
    setTimeout(resolove("RESOLVED!"), 1000);
  });
}

waitOneSecond()
.then(function(text){ console.log(text); },
      function(error){ console.log(error);})


setTimeout(console.log("test"), 2000);




