#!/bin/bash

touch ~/.bashrc;
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | /bin/bash;
source ~/.bashrc;
nvm install v4.2.1;
cd /expressjs/;
npm install;
