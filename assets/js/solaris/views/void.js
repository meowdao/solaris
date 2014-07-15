define([
    "require",
    "./abstract"
], function (require, AbstractView) {
    "use strict";

    var _ = require("underscore");

    var VoidView = function () {

    };

    VoidView.prototype = new AbstractView();

    _.extend(VoidView.prototype, {
        _options: {
            color: "#000000"
        },
        draw: function (context) {
            context.save();
            context.fillStyle = this._options.color;
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
            context.restore();
        }
    });

    return new VoidView();
});