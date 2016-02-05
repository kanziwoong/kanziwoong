# Webserver with Docker

- After installation docker in [here](../)

### Make and go to working directory

```
vagrant $ mkdir web
vagrant $ cd web
```

### Make Dockerfile for build Webserver

- You can see lastest version of docker node in [here](https://hub.docker.com/_/node/)

```
vagrant $ vi Dockerfile
	FROM node:4.2.1
	MAINTAINER kanzi w <kanziwoong@gmail.com>
	
	LABEL Description="Webserver with ExpressJS" Vendor="kanziw" Version="1.0"
	
	VOLUME [/expressjs]
	
	EXPOSE 3000
	
```

### Build

```
vagrant $ docker build --tag web:1.0 .
Sending build context to Docker daemon 1.702 MB
Step 0 : FROM node:4.2.1
 ---> 83c18ac79b98
Step 1 : MAINTAINER kanzi w <kanziwoong@gmail.com>
 ---> Running in 182e7fbf2e21
 ---> d39bb6419b2e
Removing intermediate container 182e7fbf2e21
Step 2 : LABEL Description "Webserver with ExpressJS" Vendor "kanziw" Version "1.0"
 ---> Running in 63eb318f490f
 ---> 6be9c7141f3b
Removing intermediate container 63eb318f490f
Step 3 : VOLUME [/expressjs]
 ---> Running in 2da9f064f793
 ---> c9f1bea83008
Removing intermediate container 2da9f064f793
Step 4 : EXPOSE 3000
 ---> Running in e78af901eb00
 ---> 67d2280ee45e
Removing intermediate container e78af901eb00
Successfully built 67d2280ee45e
```

### Show Webserver image

```
vagrant $ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
web                 1.0                 67d2280ee45e        21 seconds ago      642 MB
node                4.2.1               83c18ac79b98        11 days ago         642 MB
```

### Start Webserver image

- /home/vagrant/expressjs is your website made by expressjs

```
vagrant $ docker run -p 3000:3000 -v /home/vagrant/expressjs:/expressjs -d web:1.0 /bin/bash -c "npm install /expressjs && node /expressjs/app.js"
a3d33c41fc6bbccb1e5dfea5af583fdfd5dfad6d6f71ce44368ae10749fb678c
```

### Webserver status

```
vagrant $ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
a3d33c41fc6b        web:1.0             "/bin/bash -c 'npm in"   1 seconds ago       Up 1 seconds        0.0.0.0:3000->3000/tcp   jovial_saha
```

### Show logs

```
vagrant $ docker logs -f a3d3
...
depd@1.0.1, qs@4.0.0, on-finished@2.3.0, debug@2.2.0, finalhandler@0.4.0, proxy-addr@1.0.8, send@0.13.0, accepts@1.2.13, type-is@1.6.9)
npm info ok
My app listening at http://0.0.0.0:3000
```


### Connect to Webserver

- open http://localhost:3000 on Mac

### Get bash shell into a running container

```
vagrant $ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
a3d33c41fc6b        web:1.0             "/bin/bash -c 'npm in"   10 seconds ago      Up 9 seconds        0.0.0.0:3000->3000/tcp   drunk_kalam
vagrant $ docker exec -it 62fc /bin/bash
root@ a3d33c41fc6b:/expressjs#
```


### Docker inspect

```
vagrant $ docker inspect 62fc
[
{
    "Id": "62fc06d2f02e413b2d8b7d0091a91c0646652155bd5a998297509c9e7076c5db",
    "Created": "2015-10-26T00:57:34.651554932Z",
    "Path": "/bin/bash",
    "Args": [
        "-c",
        "npm install /expressjs \u0026\u0026 node /expressjs/app.js"
    ],
    "State": {
        "Running": true,
        "Paused": false,
        "Restarting": false,
        "OOMKilled": false,
        "Dead": false,
        "Pid": 2333,
        "ExitCode": 0,
        "Error": "",
        "StartedAt": "2015-10-26T00:57:34.96256198Z",
        "FinishedAt": "0001-01-01T00:00:00Z"
    },
    "Image": "fac62832432c2656251966f4b24c70c8c0a4df29d24611bc8dc124aa7646f524",
    "NetworkSettings": {
        "Bridge": "",
        "EndpointID": "95d258881d673f905ceb061ba6887dfd3daeb22992e9f2f46a411de34c89d405",
        "Gateway": "172.17.42.1",
        "GlobalIPv6Address": "",
        "GlobalIPv6PrefixLen": 0,
        "HairpinMode": false,
        "IPAddress": "172.17.0.7",
        "IPPrefixLen": 16,
        "IPv6Gateway": "",
        "LinkLocalIPv6Address": "",
        "LinkLocalIPv6PrefixLen": 0,
        "MacAddress": "02:42:ac:11:00:07",
        "NetworkID": "30ec2f7b94a871db018ec34398d929e70f3ad841d452ecfd15c26559689fd4ea",
        "PortMapping": null,
        "Ports": {
            "3000/tcp": [
                {
                    "HostIp": "0.0.0.0",
                    "HostPort": "3000"
                }
            ]
        },
        "SandboxKey": "/var/run/docker/netns/62fc06d2f02e",
        "SecondaryIPAddresses": null,
        "SecondaryIPv6Addresses": null
    },
    "ResolvConfPath": "/var/lib/docker/containers/62fc06d2f02e413b2d8b7d0091a91c0646652155bd5a998297509c9e7076c5db/resolv.conf",
    "HostnamePath": "/var/lib/docker/containers/62fc06d2f02e413b2d8b7d0091a91c0646652155bd5a998297509c9e7076c5db/hostname",
    "HostsPath": "/var/lib/docker/containers/62fc06d2f02e413b2d8b7d0091a91c0646652155bd5a998297509c9e7076c5db/hosts",
    "LogPath": "/var/lib/docker/containers/62fc06d2f02e413b2d8b7d0091a91c0646652155bd5a998297509c9e7076c5db/62fc06d2f02e413b2d8b7d0091a91c0646652155bd5a998297509c9e7076c5db-json.log",
    "Name": "/desperate_sinoussi",
    "RestartCount": 0,
    "Driver": "aufs",
    "ExecDriver": "native-0.2",
    "MountLabel": "",
    "ProcessLabel": "",
    "AppArmorProfile": "",
    "ExecIDs": null,
    "HostConfig": {
        "Binds": [
            "/home/vagrant/web/expressjs:/expressjs"
        ],
        "ContainerIDFile": "",
        "LxcConf": [],
        "Memory": 0,
        "MemorySwap": 0,
        "CpuShares": 0,
        "CpuPeriod": 0,
        "CpusetCpus": "",
        "CpusetMems": "",
        "CpuQuota": 0,
        "BlkioWeight": 0,
        "OomKillDisable": false,
        "MemorySwappiness": -1,
        "Privileged": false,
        "PortBindings": {
            "3000/tcp": [
                {
                    "HostIp": "",
                    "HostPort": "3000"
                }
            ]
        },
        "Links": null,
        "PublishAllPorts": false,
        "Dns": null,
        "DnsSearch": null,
        "ExtraHosts": null,
        "VolumesFrom": null,
        "Devices": [],
        "NetworkMode": "default",
        "IpcMode": "",
        "PidMode": "",
        "UTSMode": "",
        "CapAdd": null,
        "CapDrop": null,
        "GroupAdd": null,
        "RestartPolicy": {
            "Name": "no",
            "MaximumRetryCount": 0
        },
        "SecurityOpt": null,
        "ReadonlyRootfs": false,
        "Ulimits": null,
        "LogConfig": {
            "Type": "json-file",
            "Config": {}
        },
        "CgroupParent": "",
        "ConsoleSize": [
            0,
            0
        ]
    },
    "GraphDriver": {
        "Name": "aufs",
        "Data": null
    },
    "Mounts": [
        {
            "Source": "/home/vagrant/web/expressjs",
            "Destination": "/expressjs",
            "Mode": "",
            "RW": true
        },
        {
            "Name": "a365e28fe396a5b8db9216cbc93b152699c8b2dd27d3ec1a5c898e4336398cc3",
            "Source": "/var/lib/docker/volumes/a365e28fe396a5b8db9216cbc93b152699c8b2dd27d3ec1a5c898e4336398cc3/_data",
            "Destination": "[/expressjs]",
            "Driver": "local",
            "Mode": "",
            "RW": true
        }
    ],
    "Config": {
        "Hostname": "62fc06d2f02e",
        "Domainname": "",
        "User": "",
        "AttachStdin": false,
        "AttachStdout": false,
        "AttachStderr": false,
        "ExposedPorts": {
            "3000/tcp": {}
        },
        "PublishService": "",
        "Tty": false,
        "OpenStdin": false,
        "StdinOnce": false,
        "Env": [
            "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
            "NPM_CONFIG_LOGLEVEL=info",
            "NODE_VERSION=4.2.1"
        ],
        "Cmd": [
            "/bin/bash",
            "-c",
            "npm install /expressjs \u0026\u0026 node /expressjs/app.js"
        ],
        "Image": "web:1.0",
        "Volumes": {
            "[/expressjs]": {}
        },
        "VolumeDriver": "",
        "WorkingDir": "/expressjs",
        "Entrypoint": null,
        "NetworkDisabled": false,
        "MacAddress": "",
        "OnBuild": null,
        "Labels": {}
    }
}
]
```