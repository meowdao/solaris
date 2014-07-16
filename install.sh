#!/bin/bash

npm install
bower install

grunt

wget -m ftp://anonymous@quasar.ipa.nw.ru/incoming/EPM/Data/011m/ -np -A .bin
mkdir -p data/quasar
mv quasar.ipa.nw.ru/incoming/EPM/Data/011m data/quasar
rm -fr quasar.ipa.nw.ru