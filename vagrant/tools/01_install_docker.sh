#!/bin/bash
if [ "$EUID" -ne 0 ]; then
  echo "run script with root. do 'sudo -i' first."
else
  wget -qO- https://get.docker.com/ | sh
  sudo usermod -aG docker vagrant
  curl -L https://github.com/docker/compose/releases/download/1.6.2/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
  chmod +x /usr/local/bin/docker-compose
  sudo gpasswd -a vagrant docker
  newgrp docker
  sudo service docker restart
  echo "================================="
  echo "Installed docker and docker-compose"
  echo "You should exit from vagrant ssh, and ssh again to make it work."
  echo "If you don't get any error when you type `docker ps -a`, you're good to go."
  echo "================================="
fi
