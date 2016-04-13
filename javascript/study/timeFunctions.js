// http://stackoverflow.com/questions/15401211/date-vs-date-gettime
// 추가 필기 하자

// new Date() : 현재 시간 정보를 반환
var t = new Date();
console.log(t);

// Date 타입의 정보를 string으로 변환
var ts = t.getTime();
console.log(ts);

// String 타입의 정보를 Date 타입으로 변환
console.log(new Date(ts));