define([
    "require",
    "./abstract"
], function (require, AbstractView) {
    "use strict";

    var _ = require("underscore");

    var LegendView = function () {

    };
    LegendView.prototype = new AbstractView();

    _.extend(LegendView.prototype, {
        _options: {
            background:{
                fillStyle: "#c0c0c0"
            },
            text: {
                fillStyle: "#000000",
                font: "bold 12px sans-serif"
            }
        },
        draw: function (context) {
            context.save();
            context.beginPath();
            context.fillStyle = this._options.background.fillStyle;
            context.rect(context.canvas.width - 100, context.canvas.height - 30, context.canvas.width, context.canvas.height);
            context.fill();
            context.restore();

            var text = "1px = " + (1e6 * this._params.scale).toExponential() + "km";
            context.save();
            context.fillStyle = this._options.text.fillStyle;
            context.font = this._options.text.font;
            context.fillText(text, context.canvas.width - 100 + (100 - context.measureText(text).width) / 2, context.canvas.height - 30 + 30 / 2 + 4); // 4 is magic number
            context.restore();

        }
    });

    return new LegendView();
});
