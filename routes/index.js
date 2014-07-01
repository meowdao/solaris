"use strict";

module.exports = function (app) {

    var controller = require("../controllers/index.js"),
        middleware = require("../utils/middleware.js"),
        helper = require("../utils/helper.js");

    // HTML
    app.get("/", helper.simpleHTMLWrapper(controller.index));
    app.get("/solaris", helper.simpleHTMLWrapper(controller.solaris));
    app.get("/test", helper.simpleHTMLWrapper(controller.test));

};