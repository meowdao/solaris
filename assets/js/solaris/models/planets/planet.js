define([
    "require",
    "../object"
],function (require, AbstractObject) {
    "use strict";

    var _ = require("underscore");

    // abstract class
    var AbstractPlanet = function () {

    };

    AbstractPlanet.prototype = new AbstractObject();

    _.extend(AbstractPlanet.prototype, {

    });


    return AbstractPlanet;
});
