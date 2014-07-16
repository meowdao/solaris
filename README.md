Solaris
=======

[![Build Status](https://travis-ci.org/CTAPbIuMABP/solaris.svg?branch=master)](https://travis-ci.org/CTAPbIuMABP/solaris)

Simple 2d solar system :)

Dependencies
------------
You have to have nodejs to run the project

- nodejs 0.10.x

It may work on lower versions but I have not tested it

Installation
------------

To make the first build run:

copy `configs/config.sample.js` to `configs/config.js`

Install `grunt-cli` `bower`
installing globally is a preferred way for both packages
```
npm install -g grunt-cli bower
```
if you have an error on this step try to use `sudo` 

Download all required packages, data and build project
```bash
bash install.sh
```

Then run node server
```bash
node server.js
```

And navigate to [http://localhost:8888/view](http://localhost:8888/view) in your browser

Demo
----

![Alt text](docs/assets/demo.png?raw=true "Demo")


IPA RAN
-------
Data is provided by Institute of Applied Astronomy RAS of Russian Academy of Sciences
Latest version of data and code samples are available on ftp://quasar.ipa.nw.ru/