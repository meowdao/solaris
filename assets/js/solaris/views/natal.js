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
        _options:{
            lineWidth: 50,
            strokeStyles: ["fcc", "ccf", "9bf4ff", "ccc"]
        },
        draw: function (context) {
            this._drawCircle(context);
        },
        _drawCircle: function (context) {
            var offset = -Math.PI / 2,
                segment = Math.PI * 2 / 12;
            _.times(12, function (i) {
                this._drawSector(context, offset + i * segment, offset + i * segment + segment, this._options.strokeStyles[i % this._options.strokeStyles.length]);
            }.bind(this));
        },
        _drawSector: function (context, startangle, endangle, strokeStyle) {
            context.save();
            context.lineWidth = this._options.lineWidth;
            context.beginPath();
            context.arc(
                    context.canvas.width / 2,
                    context.canvas.height / 2,
                    context.canvas.width / 2 - this._options.lineWidth / 2,
                startangle, endangle);
            context.strokeStyle = "#" + strokeStyle;
            context.stroke();
            context.closePath();
            context.restore();
        }
    });

    return new NatalMapView();
});
