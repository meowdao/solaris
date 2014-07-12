define(function (require) {
    "use strict";

    var _ = require("underscore");
    var Proto = require("./proto");

    // abstract class
    var Label = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Label.prototype = new Proto();

    _.extend(Label.prototype, {
        _url: "/ephemeris/getObject"
    });

    return Label;
});
