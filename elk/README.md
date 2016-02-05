# ELK Stack

- ELK = ElasticSearch + LogStash + Kibana
- (모두 elastic 사의 오픈소스 제품들)
- 각각의 서버에서 생성된 로그들을 Collector를 통해 LogStach로 전송한 뒤 프로세싱(필터링) 하여 json형태로 ElasticSearch에 저장된다.
- 저장된 데이터는 Kibana라는 대시보드 툴을 이용하여 검색/시각화 한다.
	> Logstash: 로그 수집기/처리기  
	> Elasticsearch: 로그 저장소  
	> Kibana: 수집된 데이터 시각화  

## ELK Stack의 구조

### Collector

- Collector라는 툴이 있는 것은 아니다.
- syslog + rsyslog 혹은 syslog + LogStash-Forwarder를 이용

1. 구조

	- System & Docker log -> syslog 로 수집
	  (tail -f /var/log/syslog 로 볼 수 있음)
	- logger 를 이용하여 임이의 출력을 syslog 로 출력 가능
	  ex) # echo "hello" | logger
	- rsyslog 및 LogStash-Forwarder를 통해 syslog 및 lumberjack 데이터를 LogStash로 전달

### LogStash (Indexer)

- LogStash의 로깅 파이프라인을 이용하여 원하는 형태로 DB에 저장 가능

1. 구조

	- Input Plugin : Collector의 데이터를 수집하여 json 형태로 Filter Plugin으로 전달
	- Filter Plugin : 조건에 따라 매치/변환 을 수행
	- Output Plugin : 밖으로 출력, 우리의 경우 ElasticSearch(DB)에 최종 데이터를 전달


1. Common Plugin

	- grok : 패턴 매칭, ex) regular expression
	- mutate : 데이터의 변환 (rename, remove, replace, modify fields)
	- drop : 조건에 맞는 데이터를 버림
	- geoip : IP를 이용하여 위치 정보를 추가
	- multiline : 하나의 소스로부터 전달되는 여러개의 이벤트를 취합
	- date : 시간 정보 파싱


1. 설정 파일

	- logstash 설정 파일은 아래의 디렉터리에 필요에 따라 나누어 저장한다.

	```
	mac $ export qpp="/Users/kanziw/Dev/qpp/"
	mac $ cd $qpp/server/tools/docker/logstash-conf.d
	(== vagrant $ cd ~/quiz/tools/docker/logstash-conf.d)
	(== ubuntu # cd /etc/logstash/conf.d/)
	```
	
	- 설정 파일 예시

	```
	input {
	  ...
	}
	
	filter {
	  ...
	}
	
	output {
	  ...
	}
	```
	
	- 크게 input / filter / output 으로 구성




## Run ELK

### 구조

- Definition of ports
5601 : Kibana web interface
9200 : ElasticSearch json interface
9300 : ElasticSearch transport interface
5000 : LogStash server
9090 : Http input test


### 사전 설정

- Docker ports setting

	```
	mac $ cd $qpp/server/tools/vbox
	mac $ vi Vagrantfile
	  # elk
	  ...
	  config.vm.network "forwarded_port", guest: 5601, host: 5601
	  config.vm.network "forwarded_port", guest: 9200, host: 9200
	  config.vm.network "forwarded_port", guest: 5000, host: 5000
	  config.vm.network "forwarded_port", guest: 9090, host: 9090
	  ...
	```

### 실행

- 첫 사용자를 위한 ELK docker build
- 다운 받을 Repository가 없기 때문에 build를 해야 한다.
- build by $qpp/server/tools/docker/elk-docker/Dockerfile

	```
	mac $ cd $qpp/server/tools/vbox
	mac $ vagrant up
	mac $ vagrant ssh
	vagrant $ cd ~/quiz/tools/docker/elk-docker
	vagrant $ docker build -t monster/elk .
	```

- docker-compose를 이용한 ELK 실행

	```
	vagrant $ cd ~/quiz/tools/docker/docker-composes/
	vagrant $ docker-compose -f vagrant-qp-elk.yml up
	```



## Kibana 확인

- http://localhost:5601 에서 Kibana 웹 페이지를 볼 수 있다.




## 설정 예제

### input 예시

```
input {
  lumberjack {
    port => 5000
    type => "logs"
    ssl_certificate => "/etc/pki/tls/certs/logstash-forwarder.crt"
    ssl_key => "/etc/pki/tls/private/logstash-forwarder.key"
  }

  syslog {
    type => syslog
    port => 25826
  }

  http {
    type => http
    port => 9090
  }
}
```

- 3개의 소스를 정의
- type : 각 소스들의 type
- port : 해당 소스의 로그를 수신하는데 사용할 포트
- ssl_certificate : 사용 할 인증서
- ssl_key : 인증서에 인증할 key


### filter 예시

```
filter {
  if [type] == "http" {
    grok {
      match => {
        "message" => "%{WORD:eventType} %{WORD:uid} %{GREEDYDATA:data}"
      }
    }
    if [eventType] == "plainLog" {
      grok{
        match => {
          # Last data must be IP
          "data" => "%{WORD:dayOfWeek}, %{INT:dayOfMonth} %{MONTH:month} %{INT:year} %{INT:hour}:%{INT:minute}:%{INT:second} %{WORD:TimeZone} %{WORD:method} %{URIPATHPARAM:host} %{NUMBER:responseTime} %{NUMBER:statusCode} %{GREEDYDATA:client}"
        }
      }
    } else {
      json {
        source => "data"
      }
    }
  }
}
```

- 순차적으로 filter 적용
- grok : Parse arbitrary text and structure it. [(site)](https://www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html)
- grok pattern : %{SYNTAX:SEMANTIC}
	- [패턴 정보](https://github.com/logstash-plugins/logstash-patterns-core/blob/master/patterns/grok-patterns)
	- [정규표현식(Regular Expressions) 사용 가능](https://www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html#_regular_expressions)
- Test grok patterns : http://grokconstructor.appspot.com/do/match


### output 예시

```
output {
  elasticsearch { host => localhost }
  stdout { codec => rubydebug }
}
```

- ElasticSearch에 stdout 으로 출력
- host : localhost
- codec : rubydebug [site](https://www.elastic.co/guide/en/logstash/current/plugins-codecs-rubydebug.html)


### rsyslog 설정

- rsyslog가 설치 되어 있다고 가정
- 로그가 발생되는 서버에 rsyslog 설정을 해줘야 한다.
- 설정 파일에 아래와 같이 설정한다.

	```
	ubuntu # vi /etc/rsyslog.d/50-default.conf
	  *.* @@127.0.0.1:25826
	```
	- 모든 syslog 이벤트(*.*)를 127.0.0.1:25826 으로 TCP 방식(@@)을 이용하여 전송 (UDP : @)
- 만들어 놓은 설정 파일을 /etc/rsyslog.d 에 복사 후 rsyslog 서비스 재시작

	```
	ubuntu # sudo cp conf/10-logstash.conf /etc/rsyslog.d/.
	ubuntu # sudo service rsyslog restart
	```

## Addtional Site
[인증서 생성] (http://devmoons.tistory.com/31)  
[풀 설치 영문 문서] (https://www.digitalocean.com/community/tutorials/how-to-use-logstash-and-kibana-to-centralize-and-visualize-logs-on-ubuntu-14-04)  
[풀 설치 한글] (http://teamsmiley.xgridcolo.com/?p=884)


