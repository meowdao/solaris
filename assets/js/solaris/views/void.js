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
        draw: function () {
            this._context.save();
            this._context.fillStyle = this._options.color;
            this._context.fillRect(0, 0, this._context.canvas.width, this._context.canvas.height);
            this._context.restore();
        }
    });

    return new VoidView();
});