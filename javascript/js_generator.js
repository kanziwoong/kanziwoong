/**
Generator 기본 개념

여기서 increase라는 이름으로 만든 것이 제너레이터고 제너레이터라는 의미로 function를 사용했다.
여기서 제너레이터를 할당한 index에 index.toString()를 실행해 보면 "[object Generator]"로 나와서 제너레이터임을 알 수 가 있다.
이 예제에서 제너레이터는 for문을 순회하면서 yield로 인덱스 값을 반환하게 되는데 제너레이터는 여기서 멈추고 next()를 호출될 때마다 다음 yield를 만날 때까지만 다시 실행을 하게 된다.
next()를 실행할 때마다 yield의 값이 value에 담기고 done은 완료 여부를 나타낸다.
*/

// 기본 예제
function* increase(){
    for (var i = 0 ; i < 5 ; i++ ){
        yield i;
    }
}
var index = increase();
// console.log(index.toString());
// console.log(index.next());
// console.log(index.next());
// console.log(index.next());
// console.log(index.next());
// console.log(index.next());
// console.log(index.next());
do {
    var res = index.next();
    if (res.done) {
        break;
    }
    console.log(res.value);
} while(true);


// 무한급수 예제
function* Seq() {
    var idx = 0;
    do {
        yield idx++;
    } while(true)
}

var seq = Seq();

for (var i = 0 ; i < 10 ; i++ ) {
    console.log(seq.next());
}


