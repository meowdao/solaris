define(function (require) {
    "use strict";

    var AbstractObject = require("../object");
    var _ = require("underscore");

    // abstract class
    var AbstractSatellite = function () {

    };

    AbstractSatellite.prototype = new AbstractObject();

    _.extend(AbstractSatellite.prototype, {
        _init: function (options) {
            // does nothing
            void(options);
        }
    });

    return AbstractSatellite;
});
