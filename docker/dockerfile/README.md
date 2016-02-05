# Make Dockerfile

## Dockerfile?

## Syntax

- FROM : Image:tag
	
	```
	FROM ubuntu:14.04
	```
- ENV : Environment replacement

	```
	FROM busybox
	ENV foo /bar
	WORKDIR ${foo}  		# WORKDIR /bar
	ADD . $foo      		# ADD . /bar
	COPY \$foo /quux 	# COPY $foo /quux
	```	

- MAINTAINER : Information of Maintainer

	```
	MAINTAINER kanzi w <kanziwoong@gmail.com>
	```
	
- Label :

	```
	LABEL Description="Webserver with ExpressJS" Vendor="kanziw" Version="1.0"
	```


- ADD : Add file into Dockerfile

	```
	ADD ../data/expressjs/nvm_install.sh /root/ 
	```

- RUN : Execute Shell scrpit or commands while building

	```
	RUN apt-get update -y
	RUN apt-get install -y curl
	```
	- and also) RUN ["executable", "param1", "param2"]

- VOLUME : Make mount point for shared directory

	```
	VOLUME ["/home/vagrant/data", "/data", "/var/log/docker"]
	```

- WORKDIR : CMD runs on WORKDIR

	```
	WORKDIR /data/expressjs
	```

- CMD : Execute Shell scrpit or commands after building

	```
	CMD ["npm install"]
	```
	- CMD ["executable","param1","param2"]
	- CMD ["param1","param2"]
	- CMD command param1 param2
	
- EXPOSE : Port number linked with Host

	```
	EXPOSE 3000
	```

- .dockerignore file : exists in the root of `PATH`
- Currently there is no support for regular expressions.

	```
	vagrant $ vi .dockerignore
		*/temp*
	    */*/temp*
	    temp?
	    *.md
	    !LICENSE.md		# exceptions to exclusion rules like .gitignore
	```

## Example of Dockerfile

- ~/web/Dockerfile

```
FROM node:4.2.1
MAINTAINER kanzi w <kanziwoong@gmail.com>

LABEL Description="Webserver with ExpressJS" Vendor="kanziw" Version="1.0"

RUN apt-get update -y

VOLUME ["/home/vagrant/expressjs", "/expressjs"]

WORKDIR /expressjs

CMD ["npm install"]
CMD ["node app.js"]

EXPOSE 3000
```


## Build image

- `docker build <Options> <PathOfDockerfile>`

	```
	vagrant $ docker build --tag web:1.0 .
	```

## Run image

