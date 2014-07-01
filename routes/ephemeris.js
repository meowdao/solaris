"use strict";

module.exports = function (app) {

    var controller = require("../controllers/ephemeris.js"),
        helper = require("../utils/helper.js");

    // HTML
    app.get("/ephemeris/getObject", helper.simpleJSONWrapper(controller.getObject));
    app.get("/ephemeris/getObjectOrbit", helper.simpleJSONWrapper(controller.getObjectOrbit));

};