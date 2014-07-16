define([
    "require",
    "./proto"
], function (require, Proto) {
    "use strict";

    var _ = require("underscore");
    var $ = require("jquery");
    var cache = new WeakMap();

    // abstract class
    var Orbit = function (obj) {
        if (obj) {
            if (!cache.has(obj)) {
                cache.set(obj, new Orbit());
            }
            return cache.get(obj);
        }
    };

    Orbit.prototype = new Proto();

    _.extend(Orbit.prototype, {
        _url: "/ephemeris/getObjectOrbit",
        getPosition: function (params) {
            var end = new Date(), // 2214-10-21
                start = new Date(1787, 8, 10), // 1787-09-10
                diff = ~~((end - start) / 1000 / 60 / 60 / 24), // -1 ?
                data = {
                    date: end.toISOString().slice(0, 10),
                    days: params.days || (this._params.days < diff ? this._params.days : diff),
                    object: this._params.index,
                    step: this._params.step || 1,
                    center: params.center
                },
                json = JSON.stringify(data);
            if (!this._promises[json]) {
                this._promises[json] = $.ajax({
                    url: this._url,
                    data: data
                });
            }
            return this._promises[json];
        }
    });

    return Orbit;
});
