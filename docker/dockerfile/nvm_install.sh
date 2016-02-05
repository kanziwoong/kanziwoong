#!/usr/bin/env bash
#nvm_install.sh

NVM_DIR="$HOME/.nvm"

if ! hash git 2>/dev/null; then
  echo >&2 "!!! You need to install git"
  exit 1
fi

if [ -d "$NVM_DIR" ]; then
  echo ">>> NVM is already installed in $NVM_DIR, trying to update"
  echo -ne "\r=> "
  cd $NVM_DIR && git pull
else
  # Cloning to $NVM_DIR
  git clone https://github.com/creationix/nvm.git $NVM_DIR
fi

PROFILE="$HOME/.profile"
ZSHRC="$HOME/.zshrc"
SOURCE_STR="\n# This loads NVM\n[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh"

# Append NVM script to ~/.profile
if ! grep -qsc 'nvm.sh' $PROFILE; then
  echo ">>> Appending source string to $PROFILE"
  echo $SOURCE_STR >> "$PROFILE"
else
  echo ">>> Source string already in $PROFILE"
fi

# Check if .zshrc exist
if [ -f "$ZSHRC" ]; then
  # Append NVM script to ~/.zshrc
  if ! grep -qsc 'nvm.sh' $ZSHRC; then
    echo ">>> Appending source string to $ZSHRC"
    echo $SOURCE_STR >> "$ZSHRC"
  else
    echo ">>> Source string already in $ZSHRC"
  fi
fi