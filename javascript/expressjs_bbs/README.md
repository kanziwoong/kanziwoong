# Make blog with ExpressJS
- Read [this][nvm] before Install ExpressJS

## Install ExpressJS

```
$ npm install -g express-generator
```

## Make Project

```
$ express --ejs expressjs_bbs
$ cd expressjs_bbs/
$ npm install
$ npm start
```

## Install MySQL Module

```
expressjs_bbs $ npm install mysql --save
```

## MySQL Server Setting

```
mysql_server $ mysql -u root -p
mysql> create database expressjs_bbs;
mysql> grant all privileges on expressjs_bbs.* to 'node'@'localhost' identified by 'Pas$W0rd' with grant option;
mysql> grant all privileges on expressjs_bbs.* to 'node'@'%' identified by 'Pas$W0rd' with grant option;
mysql> flush privileges;
mysql> Bye
```

[nvm]: https://github.com/creationix/nvm "NVM"