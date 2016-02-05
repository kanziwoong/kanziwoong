# MongoDB [site][mongodb]

---
### memo
[Array](http://docs.mongodb.org/manual/reference/operator/update-array/)<br>
[FindAndModify](http://docs.mongodb.org/manual/reference/command/findAndModify/)<br>
간단명령어 [[1]](http://hongtaey.tistory.com/56) [[2]](http://jy86.tistory.com/26)

---

## Use MongoDB with Docker

## Use MongoDB on CentOS

## Command Usages

### DB Commands
1. Create DB or Return the existing database.

	```
	> use DATABASE_NAME
	switched to db DATABASE_NAME
	
	// Check your currently selected database
	> db
	DATABASE_NAME
	```

1. Check your databases list

	```
	> show dbs
	local  0.078GB
	
	// You can display you db after insert.
	> db.movie.insert({"name":"tutorials point"})
	WriteResult({ "nInserted" : 1 })
	> show dbs
	DATABASE_NAME  0.078GB
	local          0.078GB
	qp             0.078GB
	```

### Collection Commands
- 기존 RDB의 Table 개념이다.

1. Create Collection

	```
	> db.createCollection("mycoll")
	{ "ok" : 1 }
	```
	
1. Insert
	- 없는 collection에 insert를 하면 collection이 생성된다.

	```
	> db.COLLECTION_NAME.insert( {a: 3, b: 5, age: 20} )
	WriteResult({ "nInserted" : 1 })
	```

1. Find
	- select * from COLLECTION_NAME;

	```
	> db.COLLECTION_NAME.find()
	{ "_id" : ObjectId("5625c9bc8c1438b33104602c"), "a" : 3, "b" : 5, "age" : 20 }
	```
	
	- select a, b from COLLECTION_NAME;
	
	```	
	> db.COLLECTION_NAME.find( {}, {a: 1, b: 1} )
{ "_id" : ObjectId("5625c9bc8c1438b33104602c"), "a" : 3, "b" : 5 }
	```
	
	- select * from COLLECTION_NAME where age=20;

	```
	> db.COLLECTION_NAME.find( {age: 20} )
	{ "_id" : ObjectId("5625c9bc8c1438b33104602c"), "a" : 3, "b" : 5, "age" : 20 }
	```
	
	- select a from COLLECTION_NAME where age=20;

	```
	> db.COLLECTION_NAME.find( {age: 20}, {a: 1} )
	{ "_id" : ObjectId("5625c9bc8c1438b33104602c"), "a" : 3 }
	```
	
1. Remove
	
	```
	> db.COLLECTION_NAME.remove({})
	WriteResult({ "nRemoved" : 1 })
```

### Conditional Commands

- Find, Insert, Remove 등은 조건과 함께 사용 되는데 규칙은 아래와 같다

	```
	> ...function( { VALUE: { CONDITION } }, { VALUES_LIST } )
	```
	
1. `$gt`, `$gte`, `$lt`, `$lte`

	- select * from COLLECTION_NAME where age `>` 10 and age `<` 30;

	```
	> db.COLLECTION_NAME.find( { age: {$gt: 10, $lte: 30} } )
	{ "_id" : ObjectId("5625c9bc8c1438b33104602c"), "a" : 3, "b" : 5, "age" : 20 }
	```
1. And : `,` , Or : `$or`

	- select b from COLLECTION_NAME where age > 30 `OR` b = 5;

	```
	> db.COLLECTION_NAME.find( {$or: [{age: {$gt: 30}}, {a: 3}]}, {b: 1} )
	{ "_id" : ObjectId("5625c9bc8c1438b33104602c"), "b" : 5 }
	```
1. INC : `.sort()`, DESC : `.sort( {VALUE: -1} )`

	- select a from COLLECTION_NAME order by age DESC;

	```
	> db.COLLECTION_NAME.find({},{a: 1}).sort( {age: -1} )
	{ "_id" : ObjectId("5625c9bc8c1438b33104602c"), "a" : 3 }
	```

1. COUNT : `.count()`

	- select COUNT(*y) from COLLECTION_NAME where age < 30;
	
	```
	> db.COLLECTION_NAME.find( {age: {$lt: 30}} ).count()
	1
	```
	
	- select COUNT(age) from COLLECTION_NAME
	
	```
	> db.COLLECTION_NAME.find( {age: {'$exists': true}} ).count()
	1
	```
	
1. `$in`

	- 특정 배열안에 있는 항목과 일치하는 것들 가져오기

	```
	// _id 가 1 or 2 or 3 인 것들을 찾기
	> db.COLLECTION_NAME.find({_id: {$in: [1, 2, 3]}})
	```
	
### Etc Commands

1. `.pretty()` : 화면을 보기 좋게 출력

	```
	> db.COLLECTION_NAME.find()
	{ "_id" : ObjectId("5625c9bc8c1438b33104602c"), "a" : 3, "b" : 5, "age" : 20 }
	
	> db.COLLECTION_NAME.find().pretty()
	{
		"_id" : ObjectId("5625c9bc8c1438b33104602c"),
		"a" : 3,
		"b" : 5,
		"age" : 20
	}
	```

### memo

1. ddd

	```
	.pretty() 하면 이쁘게 보여진다
	
	// 간단한 mongodb 명령어 실습
	
	
	```
	
	
	```
	>mongod --version
	
	3. mongoDB 인스턴스 활성화
	>mongod --dbpath c:\mongodb\test
	-- mogodb shell프로그램 실행
	>mongo
	
	// db 목록 출력
	>show dbs
	
	데이터베이스 상태확인
	>db.stats()
	
	7. 데이터베이스 shutdown
	admin 영억으로 이동후에 셧다운 해야함.
	>use admin
	>db.shutdownServer()
	
	8. 데이터베이스 로그아웃
	>db.logout()
	
	9.collection 생성
	capped:true이면 해당 익스텐트를 모두 사용하게되면
	처음부터 재 사용할 수 있는 데이터 구조를 생성할 때
	size 해당 Collection의 최초 생성크기
	>db.createCollection("emp",{capped:false, size:8192});
	
	10. colection list보기
	show collections
	
	11. collection의 현재상태 및 정보분석
	>db.emp.validate();
	
	12.collection의 이름변경
	>db.emp.renameCollection("employee")
	
	13.Collection의 삭제
	>db.employee.drop();
	
	14.collection에 데이터 INSERT
	>db.emp.insert({eno:1101,fname:"JIMMY"});
	
	15.collection에 데이터 UPDATE
	>db.emp.update({eno:1101},{$set:{fname:"JOO"}});
	
	16.collection에 데이터 SELECT
	>db.emp.find().sort({eno:-1});
	
	17.도큐먼트(row)부터 정의하고 collection 생성
	>m={ename :  "smith"}
	>n={ename :  1101}
	>db.things.save(m)
	>db.things.save(n)
	>db.things.find()
	>db.things.insert({ empno : 1102, ename:"king"})
	
	18.for문을 이용한 증감된 값을 Collection에 insert
	>for(var n=1103; n<=1120; n++) db.things.save({n:n, m:"test"+n})
	
	19.db.things.find()로 조회시 리스트가 20 row가 넘는 경우 다음 페이지를 보고싶을때
	>it
	```

[mongodb]: https://www.mongodb.org/ "https://www.mongodb.org/"