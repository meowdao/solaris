define(function (require) {
    "use strict";

    var AbstractObject = require("../object");
    var _ = require("underscore");

    // abstract class
    var AbstractDwarf = function () {

    };

    AbstractDwarf.prototype = new AbstractObject();

    // http://nssdc.gsfc.nasa.gov/planetary/factsheet/
    _.extend(AbstractDwarf.prototype, {

    });


    return AbstractDwarf;
});
