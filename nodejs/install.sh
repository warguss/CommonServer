#!/bin/sh

yum install epel-release
yum -y install nodejs npm --enablerepo=epel
npm install -g express
npm install -g body-parser
