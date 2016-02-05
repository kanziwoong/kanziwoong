#Docker-compose [site][docker-compose]

## Information

### What is docker-compose?

- A tool for defining and running multi-container Docker applications.
- Using a single command, you create and start all the services from your configuration.


## Usage

### Configure compose file ([link][compose-file])

- The compose file is a [YAML][yaml] file
- The default path for a compose file is `./docker-compose.yml`.
- Each service defined in docker-compose.yml must specify exactly one of `image` or `build`. (Other keys are optional)

1. build

	- Path to a directory containing a Dockerfile.

	> Example

	```
	build: /path/to/build/dir
	```

	- If you want to build, you have to define `Dockerfile`. [Link](../dockerfile)

1. command

	- Override the default command.

	> Example

	```
	command: bundle exec thin -p 3000
	```

1. container_name

	- Specify a custom container name, rather than a generated default name.

	> Example

	```
	container_name: my-web-container
	```

1. devices

	- List of device mappings. Uses the same format as the --device docker client create option.

	> Example

	```
	devices:
	  - "/dev/ttyUSB0:/dev/ttyUSB0"
	```


1. dns

	- Custom DNS servers. Can be a single value or a list.

	> Example

	```
	dns: 8.8.8.8
	dns:
	  - 8.8.8.8
	  - 9.9.9.9
	```

1. environment

	- Add environment variables.

	> Example

	```
	environment:
	  RACK_ENV: development
	  SHOW: 'true'
	  SESSION_SECRET:
	
	environment:
	  - RACK_ENV=development
	  - SHOW=true
	  - SESSION_SECRET
	```

1. external_links

	- Link to containers started outside this `docker-compose.yml` or even outside of Compose, especially for containers that provide shared or common services. `external_links` follow semantics similar to `links` when specifying both the container name and the link alias (`CONTAINER:ALIAS`).

	> Example

	```
	external_links:
	 - redis_1
	 - project_db_1:mysql
	 - project_db_1:postgresql
	```

1. extra_hosts

	- Add hostname mappings. Use the same values as the docker client `--add-host` parameter.

	> Example

	```
	extra_hosts:
	 - "somehost:162.242.195.82"
	 - "otherhost:50.31.209.229"
	```

1. image

	- Tag or partial image ID. Can be local or remote - Compose will attempt to pull if it doesn’t exist locally.

	> Example

	```
	image: ubuntu
	image: orchardup/postgresql
	image: a4bc65fd
	```

1. labels

	- Add metadata to containers using Docker labels. You can use either an array or a dictionary.
	- It’s recommended that you use reverse-DNS notation to prevent your labels from conflicting with those used by other software.

	> Example

	```
	labels:
	  com.example.description: "Accounting webapp"
	  com.example.department: "Finance"
	  com.example.label-with-empty-value: ""
	
	labels:
	  - "com.example.description=Accounting webapp"
	  - "com.example.department=Finance"
	  - "com.example.label-with-empty-value"
	```

1. links

	- Link to containers in another service. Either specify both the service name and the link alias (`SERVICE:ALIAS`), or just the service name (which will also be used for the alias).

	> Example

	```
	links:
	 - db
	 - db:database
	 - redis
	```

	- An entry with the alias’ name will be created in /etc/hosts inside containers for this service, e.g:

	```
	172.17.2.186  db
	172.17.2.186  database
	172.17.2.187  redis
	```

1. log_driver

	- Specify a logging driver for the service’s containers, as with the --log-driver option for docker run ([documented here][log_driver]).
	- The default value is json-file.

	> Example

	```
	log_driver: "json-file"
	log_driver: "syslog"
	log_driver: "none"
	```

1. log_opt

	- Specify logging options with `log_opt` for the logging driver, as with the `--log-opt` option for `docker run`.

	> Example

	```
	log_driver: "syslog"
	log_opt:
	  syslog-address: "tcp://192.168.0.42:123"
	```

1. ports

	- Expose ports. Either specify both ports (`HOST:CONTAINER`), or just the container port (a random host port will be chosen).

	> Example

	```
	ports:
	 - "3000"
	 - "3000-3005"
	 - "8000:8000"
	 - "9090-9091:8080-8081"
	 - "49100:22"
	 - "127.0.0.1:8001:8001"
	 - "127.0.0.1:5000-5010:5000-5010"
	```
	
1. volumes

	- Mount paths as volumes, optionally specifying a path on the host machine (`HOST:CONTAINER`), or an access mode (`HOST:CONTAINER:ro`).

	> Example

	```
	volumes:
	 - /var/lib/mysql
	 - ./cache:/tmp/cache
	 - ~/configs:/etc/configs/:ro
	```

### Simple example

```
# simple-compose.yml
web:
  build: .
  ports:
   - "5000:5000"
  volumes:
   - .:/code
  links:
   - redis
redis:
  image: redis
```

### Run with simple example

```
vagrant $ docker-compose -f simple-compose.yml up
```


[docker-compose]: https://docs.docker.com/compose/ "https://docs.docker.com/compose/"
[yaml]: http://yaml.org/ "http://yaml.org/"
[compose-file]: https://docs.docker.com/compose/compose-file/ "https://docs.docker.com/compose/compose-file/"
[log_driver]: https://docs.docker.com/reference/logging/overview/ "https://docs.docker.com/reference/logging/overview/"