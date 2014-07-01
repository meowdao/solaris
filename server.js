"use strict";

var env = process.env.NODE_ENV || "development",
    http = require("http"),
    express = require("express"),
    app = express(),
    config = require("./configs/config.js")[env];

// configs
require("./configs/express.js")(config, app);
require("./configs/handlebars.js")();

// starts the server
http.createServer(app).listen(app.get("port"), function () {
    console.log("Express server listening on port " + app.get("port"));
});

process.on("uncaughtException", function (exception) {
    console.error(exception.stack);
});

module.exports = app;