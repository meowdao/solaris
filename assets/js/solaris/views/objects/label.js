define([
    "require",
    "./proto"
], function (require, Proto) {

    var _ = require("underscore");
    var cache = new WeakMap();

    // abstract class
    var Label = function (obj) {
        if (obj) {
            if (!cache.has(obj)) {
                cache.set(obj, new Label());
            }
            return cache.get(obj);
        }
    };

    Label.prototype = new Proto();

    _.extend(Label.prototype, {
        _url: "/ephemeris/getObject"
    });

    return Label;
});
