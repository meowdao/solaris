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
            lineWidth: 1,
            strokeStyle: "#c0c0c0",
            fillStyle: "#c0c0c0"
        },
        draw: function (context) {
            this._draw(context, 1);
            this._draw(context, 10);

            context.save();
            context.beginPath();
            context.fillStyle = this._options.fillStyle;
            context.rect(context.canvas.width - 100, context.canvas.height - 30, context.canvas.width, context.canvas.height);
            context.fill();
            context.restore();

            var text = "1px = " + (1e6 * this._params.scale).toExponential() + "km";
            context.save();
            context.fillStyle = "back";
            context.font = "bold 12px sans-serif";
            context.fillText(text, context.canvas.width - 100 + (100 - context.measureText(text).width) / 2, context.canvas.height - 30 + 30 / 2 + 4); // 4 magic number
            context.restore();

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

            // fix for double line
            context.moveTo(0, 0);

            context.closePath();
            context.strokeStyle = this._options.strokeStyle;
            context.stroke();
            context.restore();
        }
    });

    return new GridView();
});
