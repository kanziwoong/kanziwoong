# MySQL [site][mysql]

## Use MySQL with Docker

- **Read [this][docker_doc] before start**

1. Host -> Docker Port Setting

	- Insert this sentence in Vagrantfile

	```
	mac $ vi Vagrantfile
	 25   config.vm.network "forwarded_port", guest: 3306, host: 3306
	 
	// If you are running vagrant,
	vagrant $ vagrant reload
	```

1. Connect to docker

	```
	mac $ vagrant up
	mac $ vagrant ssh	
	```
	
1. Create a data directory

	```
	vagrant $ mkdir data
	```

1. Start a mysql container. (You can check lastest version [here][mysql_docker])

	```
	vagrant $ docker run -p 3306:3306 --name "MySQL" -v /home/vagrant/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=P@s$W0rd -d mysql:5.7
cca39f27003d0eee09a5208b352237b69c62e8209fd8b487942f5404d848ad3b
	
	// If you want to view logs,
	vagrant $ docker logs -f MySQL
	```

1. Connect to Container

	- If you use Command line,
	
	```
	$ docker exec -it cca39 bash
	```

	- I use MySQL client tool - [***Sequel Pro***][sequel] on Mac
	- Connect to 127.0.0.1:3306

1. Commit Container


	- Check my **CONTAINER ID**
	
	```	
	vagrant $ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
cca39f27003d        mysql:5.7           "/entrypoint.sh mysql"   43 seconds ago      Up 42 seconds       0.0.0.0:3306->3306/tcp   MySQL
	```
	
	- Commit my Container

	```
	vagrant $ docker commit -m "MySQL" -a "kanziw" cca39 mysql:init
d57c255865fddbcfc0c2ad9a80f601f6b10db0fc04eb0523df8f3dca754365a7

	vagrant $ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
mysql               init                d57c255865fd        6 seconds ago       358.3 MB
mysql               5.7                 ddf1563d931e        About an hour ago   358.3 MB
	```

1. Stop Container

	```
	vagrant $ docker stop cca39
	```

	
## Use MySQL on CentOS

[mysql]: https://www.mysql.com/ "https://www.mysql.com/"
[mysql_docker]: https://hub.docker.com/_/mysql/ "https://hub.docker.com/_/mysql/"
[docker_doc]: ../docs/docker "Docker"
[sequel]: http://www.sequelpro.com/ "http://www.sequelpro.com/"
