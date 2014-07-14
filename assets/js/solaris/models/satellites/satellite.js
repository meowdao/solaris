define([
    "require",
    "../object"
],function (require, AbstractObject) {
    "use strict";

    var _ = require("underscore");

    // abstract class
    var AbstractSatellite = function () {

    };

    AbstractSatellite.prototype = new AbstractObject();

    _.extend(AbstractSatellite.prototype, {

    });

    return AbstractSatellite;
});
