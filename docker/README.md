#Docker [site](docker)

## Pre Install
1. 설치 위한 tool인 Homebrew 설치

	```
	mac $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
	mac $ sudo chown -R `whoami` /usr/local
	```

1. Brew Cask를 사용해 VirtualBox와 Vagrant 설치

	```
	mac $ brew tap phinze/homebrew-cask
	mac $ brew install brew-cask
	mac $ brew cask install virtualbox
	mac $ brew cask install vagrant
	```

## Docker Install

1. Docker를 실행 할 Linux(Ubuntu) 설치

	- 현재 작업중인 디렉터리에 vagrant 설정파일(Vagrantfile)이 저장됨

	```
	mac $ vagrant init phusion/ubuntu-14.04-amd64
	mac $ vagrant up
	mac $ vagrant ssh
	vagrant $ sudo su -
	vagrant # curl -sSL https://get.docker.com/ | sh
	```

## Usages

1. Docker user 설정

	- vagrant user가 sudo 명령어 없이 docker 제어하기 위한 명령어
	- vagrant 로 **재 로그인** 필요

	```
	vagrant # usermod -aG docker vagrant
	vagrant # logout
	vagrant $ logout
	mac $ vagrant ssh
	```

1. Docker 옵션

	- Container 다운로드

	```
	vagrant $ docker pull CONTAINER_NAME:TAG
	```

	- Container 실행

	```
	// 터미널로
	vagrant $ docker run -i -t CONTAINER_NAME:TAG /bin/bash
	ubuntu #

	// 데몬 형식으로
	vagrant $ docker run -d CONTAINER_NAME:TAG
	```

	- 모든 Docker 프로세스 및 **CONTAINER ID** 확인

	```
	vagrant $ docker ps -a
	```

	- 이미지 셋팅 후 이미지 Container commit 예시

	```
	… 셋팅 작업
	ubuntu # logout
	vagrant $ docker commit -m "CONTAINER_NAME" -a "PUBLISHER" IMAGE_ID REPO_NAME:TAG
	ex) docker commit -m "Install Apache2" -a "kanziw" 5061e test:web
	```

	- Porf Forwading

	```
	// vagrant:container port setting
	vagrant $ docker run -p 80:80 -i -t ubuntu /bin/bash

	// vagrant:mac port setting
	mac $ vi Vagrantfile
		config.vm.network "forwarded_port", guest: 80, host: 8080
	```

1. Tips

	```
	vagrant $ docker stop $(docker ps -aq)
	vagrant $ docker rm $(docker ps -aq)
	```

### 추천 자료
[도커 기본 사용법](http://pyrasis.com/Docker/Docker-HOWTO#dockerfile) /
[가장 빨리 만나는 도커](http://pyrasis.com/private/2014/11/30/publish-docker-for-the-really-impatient-book) /
[도커 허브](https://hub.docker.com/) : 1개의 free private repository 사용 가능 /
[Docker Compose](https://docs.docker.com/compose/) /
[Docker Swarm](https://docs.docker.com/swarm/)

[docker]: https://www.docker.com/ "https://www.docker.com/"
