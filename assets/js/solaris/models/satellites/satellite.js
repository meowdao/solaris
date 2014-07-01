define(function (require) {
    "use strict";

    var AbstractObject = require("../object");
    var _ = require("LoDash");

    // abstract class
    var AbstractSatellite = function () {

    };

    AbstractSatellite.prototype = new AbstractObject();

    _.extend(AbstractSatellite.prototype, {
        _init: function (options) {
            // does nothing
        }
    });

    return AbstractSatellite;
});
