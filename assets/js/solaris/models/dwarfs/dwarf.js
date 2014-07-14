define([
    "require",
    "../object"
],function (require, AbstractObject) {
    "use strict";

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
