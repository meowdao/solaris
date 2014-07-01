define(function (require) {
    "use strict";

    var AbstractView = require("./abstract");
    var _ = require("LoDash");

    var VoidView = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };
    VoidView.prototype = new AbstractView();

    _.extend(VoidView.prototype, {
        _options: {
            color: "#000000"
        },
        _init: function(){
            // does nothing
        },
        draw: function () {
            this._context.save();
            this._context.fillStyle = this._options.color;
            this._context.fillRect(0, 0, this._size.width, this._size.height);
            this._context.restore();
        }
    });

    console.log(VoidView.prototype);

    return VoidView;
});