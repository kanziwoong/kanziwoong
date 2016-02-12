# [GO](https://golang.org/)

## Installation
>### Install [GVM](https://github.com/moovweb/gvm)

>```
mac $ bash < <(curl -sSL https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)
```

>### list available versions
>> Open new terminal after installation

>```
mac $ gvm listall
gvm gos (available)
   go1
   ...
   go1.5.3
   ...
```

>### Install go1.5.3
>> 1.5.3 version is lasted stable version (2016.02.12)

>```
mac $ gvm install go1.5.3
Downloading Go source...
Installing go1.5.3...
 * Compiling...
ERROR: Failed to compile. Check the logs at /Users/kanziw/.gvm/logs/go-go1.5.3-compile.log
ERROR: Failed to use installed version
```

>### ...?!!

### Download and Install from [site](https://golang.org/dl/)

```
mac $ go get golang.org/x/tour/gotour
package golang.org/x/tour/gotour: cannot download, $GOPATH not set. For more details see: go help gopath
```

* by `mac $ which go`,

```
mac $ export GOPATH=$HOME
mac $ echo "export GOPATH=$HOME" >> ~/.bash_profile
```

```
mac $ go get golang.org/x/tour/gotour
mac $ cd $GOPATH/bin
mac $ ./gotour
```

