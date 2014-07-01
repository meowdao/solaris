define(function (require) {
    "use strict";

    var SpaceObject = require("../object");
    var _ = require("LoDash");

    var AbstractStar = function () {

    };

    AbstractStar.prototype = new SpaceObject();

    _.extend(AbstractStar.prototype, {

    });

    return AbstractStar;
});
