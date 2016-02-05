# Redis [site][redis]
- 출처 : [공식사이트][redis], <http://kerocat.tistory.com/1>, <http://bcho.tistory.com/654>

## Introduction
- memory db, no-sql db
- key 와 value 쌍의 형태로 데이타를 메모리에 저장
- 메모리에 저장된 내용을 지속시키기 위해 파일로 싱크 하는 기능을 제공

#### 실습 위한 redis-cli 설치
- Redis 설치는 개인적으로 진행

	```
	mac $ brew install redis
	mac $ redis-cli
	127.0.0.1:6379>
	```

## Data Types
- Redis is not a plain key-value store, actually it is a data structures server, supporting different kind of values.
- 아래것 외에도 Bit arrays, HyperLogLogs가 추가된 듯 함
- Data Type마다 다루는 명령어가 각기 다름

### Keys
- Redis keys are binary safe, this means that you can use any binary sequence as a key
- "foo"와 같은 String부터 JPEG file과 같은 content, empty string도 vaild key

### String
- redis 의 가장 기본적인 데이타형
- key : value = 1 : 1
- 이진 데이타도 저장이 가능 (redis 에는 정수형, 실수형 이 따로 없음)
- key 에 넣을 수 있는 데이타의 최대 크기는 512mb
- value가 정수인 경우는 int 로 아니면 raw 로 encoding 됨
- 명령어들 [site][string_command]

> Example)  
> SET will replace any existing value already stored into the key

```
> set mykey somevalue
OK
> get mykey
"somevalue"
> set mykey newval
OK
> get mykey
"newval"
```

### Lists
- 배열, They are basically linked lists.
- key : value = 1 : 4,294,967,295 (2^32 - 1)
- value는  설정파일의 조건보다 크면 linkedlist, 아니면 ziplist 로 encoding 됨
- Redis Lists can be taken at constant length in constant time
- For fast access to the middle of a large collection of elements, you can use Sorted Sets
- 명령어들 [site][list_command]

> Example)

```
> rpush mylist A
(integer) 1
> rpush mylist B
(integer) 2
> lpush mylist first
(integer) 3
> lrange mylist 0 -1
1) "first"
2) "A"
3) "B"
```

### Sets
- Sets are unordered collections of strings
- key : value = 1 : 4,294,967,295 (2^32 - 1)
- 단, value에 중복은 허용하지 않음
- 요소의 추가, 제거 및 존재체크 시 소모되는 시간이 sets 에 포함된 요소의 수에 관계없이 일정
- value는 설정파일의 조건보다 크면 hashtable, 아니면 intset 로 encoding 됨
- 명령어들 [site][set_command]

> Example)

```
> sadd myset 1 2 3
(integer) 3
> smembers myset
1. 3
2. 1
3. 2
```

### Hashes
- 암호화의 hash 와는 상관 없음
- 객체를 나타내는데 사용 가능한 데이타 형
- key : field value = 1 : 4,294,967,295 (2^32 - 1)
- 형태는 lists 와 비슷하며 field value의 연속으로 이루어 짐
- value는 설정파일의 조건보다 크면 hashtable, 아니면 zipmap 로 encoding 됨
- 명령어들 [site][hashes_command]

> Example)

```
> hmset user:1000 username antirez birthyear 1977 verified 1
OK
> hget user:1000 username
"antirez"
> hget user:1000 birthyear
"1977"
> hgetall user:1000
1) "username"
2) "antirez"
3) "birthyear"
4) "1977"
5) "verified"
6) "1"
```

### Sorted sets
- sets 의 각요소마다 score 라는 실수 값을 가지고 있는 형태
- 요소들은 score를 기준으로 정렬된 형태로 보여짐 (오름차순)
- 동일한 key 에서 각 요소들의 값은 유일하지만, score 값은 중복될 수 있음
- 요소의 추가, 제거, 업데이트는 매우 빠른 방법으로 진행되는데 이는 "요소의 개수의 로그" 에 비례하는 시간이 사용됨
- score 에 승수를 넣어 랭킹 시스템 등에 사용하기 좋음
- 다른 데이타 형의 정렬을 위한 index 값으로 활용 가능
- redis 데이타 형이라고 한다.
- value는 설정파일의 조건보다 크면 skiplist, 아니면 ziplist 로 encoding 됨
- 명령어들 [site][sortedset_command]

> Example)

```
> zadd hackers 1940 "Alan Kay"
(integer) 1
> zadd hackers 1957 "Sophie Wilson"
(integer 1)
> zadd hackers 1953 "Richard Stallman"
(integer) 1
> zadd hackers 1949 "Anita Borg"
(integer) 1
> zadd hackers 1965 "Yukihiro Matsumoto"
(integer) 1
> zadd hackers 1914 "Hedy Lamarr"
(integer) 1
> zadd hackers 1916 "Claude Shannon"
(integer) 1
> zadd hackers 1969 "Linus Torvalds"
(integer) 1
> zadd hackers 1912 "Alan Turing"
(integer) 1

> zrange hackers 0 -1
1) "Alan Turing"
2) "Hedy Lamarr"
3) "Claude Shannon"
4) "Alan Kay"
5) "Anita Borg"
6) "Richard Stallman"
7) "Sophie Wilson"
8) "Yukihiro Matsumoto"
9) "Linus Torvalds"

> zrevrange hackers 0 -1
1) "Linus Torvalds"
2) "Yukihiro Matsumoto"
3) "Sophie Wilson"
4) "Richard Stallman"
5) "Anita Borg"
6) "Alan Kay"
7) "Claude Shannon"
8) "Hedy Lamarr"
9) "Alan Turing"
```

- Lexicographical scores

> Example)

```
> zrange hackers 0 -1
1) "Alan Kay"
2) "Alan Turing"
3) "Anita Borg"
4) "Claude Shannon"
5) "Hedy Lamarr"
6) "Linus Torvalds"
7) "Richard Stallman"
8) "Sophie Wilson"
9) "Yukihiro Matsumoto"

> zrangebylex hackers [B [P
1) "Claude Shannon"
2) "Hedy Lamarr"
3) "Linus Torvalds"
```

## Persistence (지속성)
- 일반적으로 Redis는 메모리에만 데이터를 저장하기 때문에 shutdown 되면 데이터가 유실됨
- 데이터를 저장하는 방식 - RDB & AOF

### RDB
- 순간적으로 메모리상의 데이타 전체를 파일(Disk)로 덤프 - snapshotting
- bgsave(비동기적) 방식 - 당시의 메모리 snaopshot을 disk에 저장하며 저장 순간에 redis는 동작을 멈추지 않고 정상적으로 동작
- save(동기적) 방식 - blocking 방식으로 순간적으로 redis의 모든 동작을 정지 후 snapshot을 disk에 저장
- non-blocking 방식으로 별도의 process를 띄운후, 명령어 수행
	
- 설정파일의 SNAPSHOTTING 부분이 이 지속성과 관련된 부분
- 저장 파일은 보통 .rdb를 확장자로 씀
- 프로세스
	- redis 는 fork 로 자식 프로세스를 생성
	- 자식 프로세스는 임시 rdb 파일에 data 를 씀
	- 자식 프로세스가 임시 rdb 파일에 data 쓰기를 마치면 임시 rdb 파일로 옛날 rdb 파일을 덮어 씌운다.
- 장점
	- 특정 시점의 백업 및 복구에 유리
	- redis-server 디스크에 저장하는 시점까지 disk i/o 가 일어나지 않으므로 성능을 극대화 할 수 있음
	- 메모리의 snapshot을 그대로 뜬 것이기 때문에, 서버 restart시 AOF 에 비해 더 빨리 메모리에 data를 load하여 redis-server 를 시작 할 수 있음
- 단점
	- 사고 발생시 백업하지 못한 변경사항은 손실
	- 백업시 fork() 로 자식 프로세스를 생성해서 백업 작업을 시행하는데 이 때 데이타가 크다면 순간적으로 많은 cpu 부하가 발생할 수 있음

### AOF

- 모든 write/update 연산 자체를 모두 log 파일에 기록하는 형태
- 서버가 재 시작될때 기록된 write/update operation을 순차적으로 재 실행하여 데이타를 복구
- operation 이 발생할때 마다 매번 기록하기 때문에 항상 현재 시점까지의 로그를 기록할 수 있으며, 기본적으로 non-blocking call - mysql 의 바이너리로그 와 비슷하다고 볼 수 있음
- command 중 BGREWRITEAOF 을 실행
- 설정파일에의 APPEND ONLY MODE 부분이 이 지속성과 관련된 부분
- 저장 파일은 보통 .aof를 확장자로 씀
- AOF 는 설정파일에서 파일을 쓰는 시점에 대해 3가지 옵션을 제공하는데 보통 기본값인 everysec 를 사용하면 됨 (자세한 것은 설정파일의 appendfsync 부분 참고)
- AOF 손상 확인 방법 : aof 파일을 쓰는 중 정전등의 문제로 파일이 손상될 수 있음, 이 때 redis-check-aof 툴로 복구가 가능
	- aof 파일을 복사
	- redis-check-aof --fix <aof복사본파일> 을 실행해 복사본 파일을 수정(복구)
	- (옵션) diff -u 명령으로 두 파일을 비교
	- 수정된 파일을 이용해 redis-server 를 다시 시작
- 장점
	- 사고 발생시 손실되는 데이타가 최소화
	- 정전등의 문제로 aof 파일에 문제가 생긴다 해도 redis-check-aof 로 aof 파일의 복구가 가능
	- aof 파일은 포맷이 단순 - 문제가 있는 쿼리만 삭제하고 복구에 사용 가능
- 단점
	- rdb 파일에 비해 보통 사이즈가 큼
	- AOF 는 fsync 정책에 따라 RDB 보다 느릴수 있음

### 권장 사항
- RDB와 AOF 방식의 장단점을 상쇠하기 위해서 두가지 방식을 혼용해서 사용하는 것이 바람직함
- 주기적으로 snapshot으로 백업하고, 다음 snapshot까지의 저장을 AOF 방식으로 수행
- 이렇게 하면 서버가 restart될 때 백업된 snapshot을 reload하고, 소량의 AOF 로그만 replay하면 되기 때문에, restart 시간을 절약하고 데이타의 유실을 방지할 수 있음

## PUB/SUB
- redis는 JMS나 IBM MQ 같은 메세징에 활용할 가능
- 1:1 형태의 Queue 뿐만 아니라 1:N 형태의 Publish/Subscribe 메세징도 지원 (Publish/Subscribe 구조에서 사용되는 Queue를 일반적으로 Topic이라고 함)
- 하나의 Client가 메세지를 Publish하면, 이 Topic에 연결되어 있는 다수의 클라이언트가 메세지를 받을 수 있는 구조, [참조 site](http://en.wikipedia.org/wiki/Pub/sub)



재미있는 것중에 하나는 일반적인 Pub/Sub 시스템의 경우 Subscribe 하는 하나의 Topic에서만 Subscribe하는데 반해서, redis에서는 pattern matching을 통해서 다수의 Topic에서 message 를 subscribe할 수 있다.

## Commands
- [Full commands of Redis][full_command]

### SET
- SET key value [EX seconds] [PX milliseconds] [NX|XX]
- Options
	- EX seconds : Set the specified expire time, in seconds.
	- PX milliseconds : Set the specified expire time, in milliseconds.
	- NX : Only set the key if it does not already exist.
	- XX : Only set the key if it already exist.

> Example)

```
> set mykey somevalue
OK
> get mykey
"somevalue"
> set mykey newval nx
(nil)
> set mykey newval xx
OK
```

> INCR Example)  
> Similar commands : INCRBY, DECR, DECRBY, ....

```
> set counter 100
OK
> incr counter
(integer) 101
> incr counter
(integer) 102
> incrby counter 50
(integer) 152
```

> MSET & MGET Example)  
> When MGET is used, Redis returns an array of values.

```
> mset a 10 b 20 c 30
OK
> mget a b c
1) "10"
2) "20"
3) "30"
```

### EXISTS, DEL, TYPE
> Example)

```
> set mykey hello
OK
> exists mykey
(integer) 1
> type mykey
string
> del mykey
(integer) 1
> exists mykey
(integer) 0
> type mykey
string
> del mykey
(integer) 0
```

### EXPIRES, TTL
> Example)

```
> set key some-value
OK
> expire key 5
(integer) 1
> get key (immediately)
"some-value"
> get key (after some time)
(nil)
> set key 100 ex 10
OK
> ttl key
(integer) 9
```

### RPUSH, LPUSH, LRANGE
> Example)

```
> rpush mylist A
(integer) 1
> rpush mylist B
(integer) 2
> lpush mylist first
(integer) 3
> lrange mylist 0 -1
1) "first"
2) "A"
3) "B"
> rpush mylist 1 2 3 4 5 "foo bar"
(integer) 9
> lrange mylist 0 -1
1) "first"
2) "A"
3) "B"
4) "1"
5) "2"
6) "3"
7) "4"
8) "5"
9) "foo bar"
```

### RPOP, LPOP

> Example)

```
> rpush mylist a b c
(integer) 3
> rpop mylist
"c"
> lpop mylist
"a"
> rpop mylist
"b"
> rpop mylist
(nil)
```

### LTRIM, LLEN

> Example)

```
> rpush mylist 1 2 3 4 5
(integer) 5
> ltrim mylist 0 2
OK
> lrange mylist 0 -1
1) "1"
2) "2"
3) "3"
> llen mylist
(integer) 3
> rtrim mylist 0 1
(error) ERR unknown command 'rtrim'
```

### HMSET, HMGET, HGET, HGETALL, HINCRYBY

> Example)

```
> hmset user:1000 username antirez birthyear 1977 verified 1
OK
> hmget user:1000 username birthyear no-such-field
1) "antirez"
2) "1977"
3) (nil)
> hget user:1000 username
"antirez"
> hget user:1000 birthyear
"1977"
> hgetall user:1000
1) "username"
2) "antirez"
3) "birthyear"
4) "1977"
5) "verified"
6) "1"
> hincrby user:1000 birthyear 10
(integer) 1987
> hincrby user:1000 birthyear 10
(integer) 1997
> hincrby user:1000 birthyear -5
(integer) 1992
```

### SADD, SMEMBERS, SISMEMBER
> Example)

```
> sadd myset 1 2 3
(integer) 3
> smembers myset
1. 3
2. 1
3. 2
> sismember myset 3
(integer) 1
> sismember myset 30
(integer) 0
```

### ZADD, ZRANGE, ZREVRANGE

> Example)

```
> zadd hackers 1940 "Alan Kay"
(integer) 1
> zadd hackers 1957 "Sophie Wilson"
(integer 1)
> zadd hackers 1953 "Richard Stallman"
(integer) 1
> zadd hackers 1949 "Anita Borg"
(integer) 1
> zadd hackers 1965 "Yukihiro Matsumoto"
(integer) 1
> zadd hackers 1914 "Hedy Lamarr"
(integer) 1
> zadd hackers 1916 "Claude Shannon"
(integer) 1
> zadd hackers 1969 "Linus Torvalds"
(integer) 1
> zadd hackers 1912 "Alan Turing"
(integer) 1

> zrange hackers 0 -1
1) "Alan Turing"
2) "Hedy Lamarr"
3) "Claude Shannon"
4) "Alan Kay"
5) "Anita Borg"
6) "Richard Stallman"
7) "Sophie Wilson"
8) "Yukihiro Matsumoto"
9) "Linus Torvalds"

> zrevrange hackers 0 -1
1) "Linus Torvalds"
2) "Yukihiro Matsumoto"
3) "Sophie Wilson"
4) "Richard Stallman"
5) "Anita Borg"
6) "Alan Kay"
7) "Claude Shannon"
8) "Hedy Lamarr"
9) "Alan Turing"

> zrange hackers 0 -1 withscores
1) "Alan Turing"
2) "1912"
3) "Hedy Lamarr"
4) "1914"
5) "Claude Shannon"
6) "1916"
7) "Alan Kay"
8) "1940"
9) "Anita Borg"
10) "1949"
11) "Richard Stallman"
12) "1953"
13) "Sophie Wilson"
14) "1957"
15) "Yukihiro Matsumoto"
16) "1965"
17) "Linus Torvalds"
18) "1969"
```

### ZRANGEBYSCORE, ZREMRANGEBYSCORE
> Example)

```
> zadd myzset 1 "one"
(integer) 1
> zadd myzset 2 "two"
(integer) 1
> zadd myzset 3 "three"
(integer) 1
> zrangebyscore myzset -inf +inf
1) "one"
2) "two"
3) "three"
> zrangebyscore myzset 1 2
1) "one"
2) "two"
> zrangebyscore myzset (1 2
1) "two"
> zrangebyscore myzset (1 (2
(empty list or set)
> zremrangebyscore myzset -inf (2
(integer) 1
> zrange myzset 0 -1 withscore
1) "two"
2) "2"
3) "three"
4) "3"
```

### ZRANGEBYLEX

> Example)

```
> zrange hackers 0 -1
1) "Alan Kay"
2) "Alan Turing"
3) "Anita Borg"
4) "Claude Shannon"
5) "Hedy Lamarr"
6) "Linus Torvalds"
7) "Richard Stallman"
8) "Sophie Wilson"
9) "Yukihiro Matsumoto"

> zrangebylex hackers [B [P
1) "Claude Shannon"
2) "Hedy Lamarr"
3) "Linus Torvalds"
```


## Install redis-cli
```
mac $ brew install redis
mac $ redis-cli
```

---
## 출처
[Redis 소개](http://bcho.tistory.com/654)
[Redis 연구노트](http://kerocat.tistory.com/1)

[redis]: http://redis.io/ "http://redis.io/"
[string_command]: http://redis.io/commands#string "http://redis.io/commands#string"
[list_command]: http://redis.io/commands#list "http://redis.io/commands#list"
[set_command]: http://redis.io/commands#set "http://redis.io/commands#set"
[hashes_command]: http://redis.io/commands#hash "http://redis.io/commands#hash"
[sortedset_command]: http://redis.io/commands#sorted_set "http://redis.io/commands#sorted_set"
[full_command]: http://redis.io/commands "http://redis.io/commands"