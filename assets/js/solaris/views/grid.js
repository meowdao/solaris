define([
    "require",
    "./abstract"
], function (require, AbstractView) {
    "use strict";

    var _ = require("underscore");

    var GridView = function () {

    };
    GridView.prototype = new AbstractView();

    _.extend(GridView.prototype, {
        _options: {
            step: 10,
            strokeStyle: "#c0c0c0"
        },
        draw: function (context) {
            this._draw(context, 1);
            this._draw(context, 10);
        },
        _draw: function (context, distance) {
            context.save();
            context.beginPath();

            // vertical
            _.range(this._options.step * distance, context.canvas.width, this._options.step * distance).forEach(function (i) {
                context.moveTo(0, i);
                context.lineTo(context.canvas.height, i);
            }, this);

            // horizontal
            _.range(this._options.step * distance, context.canvas.height, this._options.step * distance).forEach(function (i) {
                context.moveTo(i, 0);
                context.lineTo(i, context.canvas.width);
            }, this);

            // move to the beginning before close path
            context.moveTo(0, 0);

            context.strokeStyle = this._options.strokeStyle;
            context.closePath();
            context.stroke();
            context.restore();
        }
    });

    return new GridView();
});
