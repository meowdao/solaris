define(function (require) {
    "use strict";

    var _ = require("LoDash");

    var AbstractBelt = function () {

    };

    _.extend(AbstractBelt.prototype, {
        _init: function (options) {
            // does nothing
        }
    });

    return AbstractBelt;
});
