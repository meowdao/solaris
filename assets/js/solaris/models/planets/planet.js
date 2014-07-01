define(function (require) {
    "use strict";

    var AbstractObject = require("../object");
    var _ = require("LoDash");

    // abstract class
    var AbstractPlanet = function () {

    };

    AbstractPlanet.prototype = new AbstractObject();

    // http://nssdc.gsfc.nasa.gov/planetary/factsheet/
    _.extend(AbstractPlanet.prototype, {

    });


    return AbstractPlanet;
});
