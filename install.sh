#!/bin/sh

npm install
bower install
bundle install

wget -m ftp://anonymous@quasar.ipa.nw.ru/incoming/EPM/Data/011m/ -np -A .bin
mv quasar.ipa.nw.ru/incoming/EPM/Data/011m data/quasar/011m
rm -fr quasar.ipa.nw.ru