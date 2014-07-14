define([
    "require",
    "./abstract",
    "../models/stars/sun"
], function (require, AbstractView) {
    "use strict";

    var _ = require("underscore");
    var $ = require("jquery");

    // http://en.wikipedia.org/wiki/Solar_System
    var HypotrochoidView = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };
    HypotrochoidView.prototype = new AbstractView();

    _.extend(HypotrochoidView.prototype, {
        _init: function (options) {
            //console.log("HypotrochoidView", options);
            _.forEach(options.sub, function (options, view) {
                this._views[view] = new (require("../models/stars/" + view))(this._context, options);
            }, this);
        },
        draw: function () {
            //console.log("HypotrochoidView:draw")
            /*var orbits = _.map(this._views, function (star) {
                return _.map(star._views, function (planet) {
                    return planet.getAverageOrbit();
                });
            });*/
            //console.log("Orbits", orbits)

            var orbits = _.map(this._views.sun._views, function (planet) {
                return planet._views.orbit.getPositions(new Date());
            });

            $.when.apply($, orbits).then(function(){
                var from = arguments[0][0];
                var to = arguments[1][0];
                var au = 149597870.691;
                //console.log("SolarSystemView:drawing", from, to);
                this._context.save();
                this._context.beginPath();
                for (var i = 0, j = from.length; i < j; i++) {
                    this._context.moveTo(this._context.canvas.width / 2 + from[i].xv[0] * au / 1e6, this._context.canvas.height / 2 + from[i].xv[1] * au / 1e6);
                    this._context.lineTo(this._context.canvas.width / 2 + to[i].xv[0] * au / 1e6, this._context.canvas.height / 2 + to[i].xv[1] * au / 1e6);
                }
                this._context.strokeStyle = this._options.strokeStyle;
                this._context.closePath();
                this._context.stroke();
                this._context.restore();
            }.bind(this));

        },
        _drawOrbit: function () {

        }
    });

    return HypotrochoidView;
});
