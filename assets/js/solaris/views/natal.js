define([
    "require",
    "./abstract",
], function (require, AbstractView) {
    "use strict";

    var _ = require("underscore");

    var NatalMapView = function () {

    };

    NatalMapView.prototype = new AbstractView();

    _.extend(NatalMapView.prototype, {
        _views: {},
        draw: function (context) {
            this._drawCircle(context);
        },
        _drawCircle: function (context) {
            var offset = -Math.PI / 2,
                segment = Math.PI * 2 / 12,
                colors = ["fcc", "ccf", "9bf4ff", "ccc"];
            _.times(12, function (i) {
                this._drawSector(context, offset + i * segment, offset + i * segment + segment, colors[i % colors.length]);
            }.bind(this));
        },
        _drawSector: function (context, startangle, endangle, color) {
            context.save();
            context.lineWidth = 50;
            context.beginPath();
            context.arc(
                    context.canvas.width / 2,
                    context.canvas.height / 2,
                    context.canvas.width / 2 - context.lineWidth / 2,
                startangle, endangle);
            context.strokeStyle = "#" + color;
            context.stroke();
            context.closePath();
            context.restore();
        }
    });

    return new NatalMapView();
});
