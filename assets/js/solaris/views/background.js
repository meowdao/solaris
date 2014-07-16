define([
    "require",
    "./abstract"
], function (require, AbstractView) {
    "use strict";

    var _ = require("underscore");

    var BackgroundView = function () {

    };

    BackgroundView.prototype = new AbstractView();

    _.extend(BackgroundView.prototype, {
        _options: {
            fillStyle: "#000000"
        },
        draw: function (context) {
            context.save();
            context.fillStyle = this._options.fillStyle;
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
            context.restore();
        }
    });

    return new BackgroundView();
});