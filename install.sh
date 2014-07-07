#!/bin/bash

npm install
bower install

grunt

wget -m ftp://anonymous@quasar.ipa.nw.ru/incoming/EPM/Data/011m/ -np -A .bin
mv quasar.ipa.nw.ru/incoming/EPM/Data/011m data/quasar/011m
rm -fr quasar.ipa.nw.ru