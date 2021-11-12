#!/bin/bash

export NODE_OPTIONS="--max-old-space-size=4096"

npm install yarn -g

#[[ -d node_modules ]] ||
yarn install && yarn build

yarn start
