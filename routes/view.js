"use strict";

module.exports = function (app) {

    var controller = require("../controllers/view.js"),
        // middleware = require("../utils/middleware.js"),
        helper = require("../utils/helper.js");

    // HTML
    app.get("/view", helper.simpleRedirect(controller.list));
    app.get("/view/*", helper.simpleHTMLWrapper(controller.any));

};