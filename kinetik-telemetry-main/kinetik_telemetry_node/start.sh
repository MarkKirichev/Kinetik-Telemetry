#!/bin/bash

export NODE_OPTIONS="--max-old-space-size=4096"

[[ -d node_modules ]] || npm install

npm run watch