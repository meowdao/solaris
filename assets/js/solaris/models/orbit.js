define(function (require) {
    "use strict";

    var _ = require("underscore");
    var $ = require("jquery");

    // abstract class
    var Orbit = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Orbit.prototype = {
        _context: null,
        _options: {},
        _optionsDefault: {
            color: "#ffffff"
        },
        _promise: null,
        init: function (options) {
            //console.log("Orbit:init", options, this._options)
            this._options = _.extend({}, this._optionsDefault, options);
        },
        getPositions: function (data) {
            var start = new Date(),
                end = new Date(2230, 0, 1),
                diff = ~~((end - start) / 1000 / 60 / 60 / 24); // -1 ?
            //console.log("Orbit:getPositions",this._options)
            this._promise = $.ajax({
                url: "/ephemeris/getObjectOrbit",
                data: {
                    date: start.toISOString().slice(0, 10),
                    days: this._options.days < diff ? this._options.days : diff,
                    object: this._options.index,
                    step: this._options.step,
                    center: data.center
                }
            });
            return this._promise;
        },
        abort: function () {
            if (this._promise) {
                this._promise.abort();
                this._promise = null;
            }
        }
    };

    return Orbit;
});
