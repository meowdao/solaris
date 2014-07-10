Solaris
=======

Simple 2d solar system :)

Dependencies
------------
You have to have nodejs to run the project

- nodejs 0.10.29

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

Download all required packages and data
```bash
bash install.sh
```

Then run node server
```bash
node server.js
```

And navigate to [http://localhost:8888/](http://localhost:8888/) in your browser

Demo
----

![Alt text](docs/assets/demo.png?raw=true "Demo")


IPA RAN
-------
Data is provided by Institute of Applied Astronomy RAS of Russian Academy of Sciences
Latest version of data and code samples are available on ftp://quasar.ipa.nw.ru/