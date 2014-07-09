#!/bin/bash

npm install
bower install

grunt

wget -m ftp://anonymous@quasar.ipa.nw.ru/incoming/EPM/Data/011m/ -np -A .bin
mkdir -p data/quasar/011m
mv quasar.ipa.nw.ru/incoming/EPM/Data/011m data/quasar/011m
rm -fr quasar.ipa.nw.ru