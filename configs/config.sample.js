"use strict";

var path = require("path");

var rootPath = path.normalize(__dirname + "/..");

module.exports = {
    development: {
        port: 8888,
        path: {
            root: rootPath,
            views: path.join(rootPath, "views")
        }
    }
};