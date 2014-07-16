"use strict";

var hbs = require("express-hbs"),
    logger = require("morgan"),
    session = require("express-session"),
    favicon = require("static-favicon"),
    serveStatic = require("serve-static"),
    cookieParser = require("cookie-parser"),
    bodyParser = require("body-parser"),
    compress = require("compression"),
    errorHandler = require("errorhandler");

module.exports = function (config, app) {

    app.set("port", process.env.PORT || config.port);
    app.set("jsonp callback", true);
    app.engine("hbs", hbs.express3({
        layoutsDir: config.path.views + "/layouts",
        partialsDir: config.path.views + "/partials"
    }));
    app.set("view engine", "hbs");
    app.set("views", config.path.views);

    var maxAge = 864e5; //one day
    if (process.env.NODE_ENV === "development") {
        maxAge = 0;
    }

    app.use(serveStatic("dist", {maxAge: maxAge}));
    app.use(serveStatic("assets", {maxAge: maxAge}));

    app.use(compress());
    app.use(logger("dev")); // "default", "short", "tiny", "dev"
    app.use(cookieParser("keyboardcat"));
    app.use(session({
        secret: "keyboardcat",
        key: "sid",
        resave: false,
        saveUninitialized: true,
        cookie: {
            //domain : ".mydomain.com",
            //path: "/",
            maxAge: 31536e6, // 1 year
            httpOnly: true,
            secure: false
        }
    }));
    app.use(bodyParser.urlencoded({
        extended:true
    }));
    app.use(favicon(config.path.root + "/dist/img/favicon.ico"));

    require("../routes/ephemeris.js")(app);
    require("../routes/index.js")(app);
    require("../routes/view.js")(app);

    app.use(function (request, response, next) {
        var error = new Error();
        error.status = 404;
        next(error);
    });

    if (process.env.NODE_ENV === "development") {
        app.use(errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
    } else {
        /* jshint unused: false */
        // next is needed by express
        app.use(function (error, request, response, next) {
            console.error(error);
            error.status = error.status || 500;
            response.status(error.status);
            response.render("error.hbs", {error: error, url: request.url}, function (error, string) {
                if (error) {
                    console.error(error);
                    response.send(500, "oops :(");
                } else {
                    response.send(string);
                }
            });

        });
        /* jshint unused: true */
    }
};