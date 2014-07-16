define([
    "require",
    "./abstract",
    "../constants",
    "../models/stars/sun"
], function (require, AbstractView, constants) {
    "use strict";

    var _ = require("underscore");
    var $ = require("jquery");

    var HypotrochoidView = function () {

    };
    HypotrochoidView.prototype = new AbstractView();

    _.extend(HypotrochoidView.prototype, {
        _options: {
            strokeStyle: "#fff"
        },
        _loadModels: function (models) {
            _.forEach(models, function (options, model) {
                this._views[model] = require("../models/" + model);
                this._views[model].setOptions(options);
            }, this);
        },
        draw: function (context) {

            var orbits = _.map(this._views["stars/sun"]._views, function (planet) {
                return planet._views.orbit.getPosition(this._params);
            }.bind(this));

            $.when.apply($, orbits).done(function () {
                var from = arguments[0][0];
                var to = arguments[1][0];

                context.save();
                context.beginPath();
                for (var i = 0, j = from.length; i < j; i++) {
                    context.moveTo(context.canvas.width / 2 + from[i][0] * constants.au / 1e6, context.canvas.height / 2 + from[i][1] * constants.au / 1e6);
                    context.lineTo(context.canvas.width / 2 + to[i][0] * constants.au / 1e6, context.canvas.height / 2 + to[i][1] * constants.au / 1e6);
                }
                context.strokeStyle = this._options.strokeStyle;
                context.stroke();
                context.closePath();
                context.restore();
            }.bind(this));

        }
    });

    return new HypotrochoidView();
});
