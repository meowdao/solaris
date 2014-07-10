define(function (require) {
    "use strict";

    var _ = require("underscore");

    var AbstractBelt = function () {

    };

    _.extend(AbstractBelt.prototype, {
        _init: function (options) {
            // does nothing
            void(options);
        }
    });

    return AbstractBelt;
});
