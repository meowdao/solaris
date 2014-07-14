define([
    "require",
    "../object"
],function (require, AbstractObject) {
    "use strict";

    var _ = require("underscore");

    var AbstractStar = function () {

    };

    AbstractStar.prototype = new AbstractObject();

    _.extend(AbstractStar.prototype, {

    });

    return AbstractStar;
});
