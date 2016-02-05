# MongoDB [site][mongodb]

## Use MongoDB with Docker

- **Read [this][docker_doc] before start**

1. Connect to docker

	```
	mac $ vagrant up
	mac $ vagrant ssh
	```

1. Start a mongo container. (You can check lastest version [here][mongodb_docker])

	```
	vagrant $ docker run -p 27017:27017 --name "CONTAINER_NAMES" -d mongo
	1a5f56c2d7903d016dd79fac6bc380090e3ea1730b3e565b5033c3e4e879c2c7
	```

1. Connect to Container

	- Install **mongodb-clients**

	```
	vagrant $ sudo apt-get install mongodb-clients -y
	```
	
	- Connect and Set with own settings

	```
	vagrant $ mongo
	> ...
	```

1. Commit Container

	- Check my **CONTAINER ID**
	
	```	
	vagrant $ docker ps
	CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
	1a5f56c2d790        mongo               "/entrypoint.sh mongo"   7 seconds ago       Up 6 seconds        27017/tcp           CONTAINER_NAMES
	```
	
	- Commit my Container

	```
	vagrant $ docker commit -m "myMongo" -a "kanziw" 1a5f mongo:v1.0
74fa1fde917735cfb761aaac8800f5674d5fe271dcc2a72f3c09db70f94983c4

	vagrant $ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
mongo               v1.0                74fa1fde9177        8 seconds ago       261.6 MB
mongo               latest              910678a338ed        2 days ago          261.6 MB
	```

1. Stop Container

	```
	vagrant $ docker stop 1a5f
	```
	
## Use MongoDB on CentOS

[mongodb]: https://www.mongodb.org/ "https://www.mongodb.org/"
[mongodb_docker]: https://hub.docker.com/_/mongo/ "https://hub.docker.com/_/mongo/"
[docker_doc]: ../docs/docker "Docker"
