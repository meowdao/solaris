define([
    "require",
    "./proto"
], function (require, Proto) {
    "use strict";

    var _ = require("underscore");
    var $ = require("jquery");

    // abstract class
    var Orbit = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Orbit.prototype = new Proto();

    _.extend(Orbit.prototype, {
        _url: "/ephemeris/getObjectOrbit",
        getPosition: function (params) {
            var start = new Date(),
                end = new Date(2230, 0, 1),
                diff = ~~((end - start) / 1000 / 60 / 60 / 24), // -1 ?
                data = {
                    date: start.toISOString().slice(0, 10),
                    days: this._params.days < diff ? this._params.days : diff,
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
