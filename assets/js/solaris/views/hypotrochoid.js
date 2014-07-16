define([
    "require",
    "./abstract",
    "../models/stars/sun"
], function (require, AbstractView) {
    "use strict";

    var _ = require("underscore");
    var $ = require("jquery");

    var HypotrochoidView = function () {

    };
    HypotrochoidView.prototype = new AbstractView();

    _.extend(HypotrochoidView.prototype, {
        _setOptions: function (options) {
            _.forEach(options, function (views, dir) {
                _.forEach(views, function (options, view) {
                    this._views[view] = require("../models/" + dir + "/" + view);
                    this._views[view].setOptions(options);
                }, this);
            }, this);
        },
        draw: function (context) {

            var orbits = _.map(this._views.sun._views, function (planet) {
                return planet._views.orbit.getPosition(this._params);
            }.bind(this));

            $.when.apply($, orbits).then(function(){
                var from = arguments[0][0];
                var to = arguments[1][0];
                var au = 149597870.691;

                context.save();
                context.beginPath();
                for (var i = 0, j = from.length; i < j; i++) {
                    context.moveTo(context.canvas.width / 2 + from[i][0] * au / 1e6, context.canvas.height / 2 + from[i][1] * au / 1e6);
                    context.lineTo(context.canvas.width / 2 + to[i][0] * au / 1e6, context.canvas.height / 2 + to[i][1] * au / 1e6);
                }
                context.strokeStyle = "#fff";
                context.closePath();
                context.stroke();
                context.restore();
            }.bind(this));

        }
    });

    return new HypotrochoidView();
});
