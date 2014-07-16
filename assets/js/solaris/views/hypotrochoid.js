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
            strokeStyle: "#fff",
            lineJoin: "round"
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

            $.when.apply($, orbits).done(function (from, to) {
                this._draw(context, from[0], to[0]);
            }.bind(this));

        },

        _draw: function (context, from, to) {
            context.save();
            context.beginPath();
            for (var i = 0, j = from.length; i < j; i++) {
                context.moveTo(
                        context.canvas.width / 2 + from[i][0] * constants.au / 1e6 / this._params.scale,
                        context.canvas.height / 2 + from[i][1] * constants.au / 1e6 / this._params.scale
                );
                context.lineTo(
                        context.canvas.width / 2 + to[i][0] * constants.au / 1e6 / this._params.scale,
                        context.canvas.height / 2 + to[i][1] * constants.au / 1e6 / this._params.scale
                );
            }
            context.strokeStyle = this._options.strokeStyle;
            context.stroke();
            context.closePath();
            context.restore();
        },

        _draw2: function (context, from, to) {

            for (var i = 0, j = from.length, array = []; i < j; i++) {
                array.push(from[i]);
                array.push(to[i]);
            }

            context.save();
            context.beginPath();
            context.moveTo(
                    context.canvas.width / 2 + array[0][0] * constants.au / 1e6 / this._params.scale,
                    context.canvas.width / 2 + array[1][0] * constants.au / 1e6 / this._params.scale
            );

            for (var k = 0, l = array.length - 2; k < l; k++) {
                context.lineTo(
                        context.canvas.width / 2 + array[k][0] * constants.au / 1e6 / this._params.scale,
                        context.canvas.height / 2 + array[k][1] * constants.au / 1e6 / this._params.scale
                );
            }

            context.strokeStyle = this._options.strokeStyle;
            context.lineJoin = this._options.lineJoin;
            context.stroke();
            context.closePath();
            context.restore();

        },

        _draw3: function (context, from, to) {

            for (var i = 0, j = from.length, array = []; i < j; i++) {
                array.push(from[i]);
                array.push(to[i]);
            }

            context.save();
            context.beginPath();
            context.moveTo(
                    context.canvas.width / 2 + array[0][0] * constants.au / 1e6 / this._params.scale,
                    context.canvas.width / 2 + array[1][0] * constants.au / 1e6 / this._params.scale
            );

            for (var k = 0, l = array.length - 1, x1, x2, y1, y2; k < l; k++) {
                x1 = context.canvas.width / 2 + array[k][0] * constants.au / 1e6 / this._params.scale;
                x2 = context.canvas.width / 2 + array[k + 1][0] * constants.au / 1e6 / this._params.scale;
                y1 = context.canvas.height / 2 + array[k][1] * constants.au / 1e6 / this._params.scale;
                y2 = context.canvas.height / 2 + array[k + 1][1] * constants.au / 1e6 / this._params.scale;
                context.quadraticCurveTo(x1, y1, (x1 + x2) / 2, (y1 + y2) / 2);
            }

            context.strokeStyle = this._options.strokeStyle;
            context.lineJoin = this._options.lineJoin;
            context.stroke();
            context.closePath();
            context.restore();

        }
    });

    return new HypotrochoidView();
});
