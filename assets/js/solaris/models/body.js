define(function (require) {
    "use strict";

    var _ = require("underscore");
    var Proto = require("./proto");

    // abstract class
    var Body = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Body.prototype = new Proto();

    _.extend(Body.prototype, {
        _url: "/ephemeris/getObject"
    });

    return Body;
});
