define([
    "require",
    "./proto"
], function (require, Proto) {
    "use strict";

    var _ = require("underscore");
    var cache = new WeakMap();

    // abstract class
    var Body = function (obj) {
        if (obj) {
            if (!cache.has(obj)) {
                cache.set(obj, new Body());
            }
            return cache.get(obj);
        }
    };

    Body.prototype = new Proto();

    _.extend(Body.prototype, {
        _url: "/ephemeris/getObject"
    });

    return Body;

});
