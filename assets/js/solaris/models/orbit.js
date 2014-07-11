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
        _cache: {},
        init: function (options, params) {
            //console.log("Orbit:init", options, this._options)
            this._options = _.extend({}, this._optionsDefault, options);
            this._params = params;
            this._cache = {}; // override prototype
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
                    days: this._params.days < diff ? this._params.days : diff,
                    object: this._params.index,
                    step: this._params.step || 1,
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
        },
        getImage: function(draw, data){
            if (!this._cache[data.center]) {
                this._cache[data.center] = this.getPositions(data)
                    .then(draw);
            }
            return this._cache[data.center];
        },
        getAverageOrbit: function () {
            //console.log("Z", this)
            return (this._options.orbit.perihelion + this._options.orbit.aphelion) / 2;
        }
    };

    return Orbit;
});
