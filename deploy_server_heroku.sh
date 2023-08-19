#! /bin/bash
yarn build:server
heroku container:push --app=lspr-ng web
heroku container:release --app=lspr-ng web

# "postinstall": "./postinstall.sh",