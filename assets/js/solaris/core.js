define(["require",
    "./views/void",
    "./views/grid",
    "./views/system",
    "./views/hypotrochoid"
], function (require) {
    "use strict";

    var _ = require("underscore");

    var Solaris = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Solaris.prototype = {
        _context: null,
        _options: {
        },
        _views: {},
        init: function (element, options) {
            this._context = element.getContext("2d");
            // TODO fix me
            this._context.drawImageData = function (data) {
                var img = new Image();
                img.src = data;
                this.drawImage(img, 0, 0);
            };
            _.extend(this._options, options);
        },
        loadView: function (view, options) {
            this._views[view] = require("./views/" + view);
            this._views[view].setOptions(this._context, options, this._options);
            this._views[view].draw();
            return this._views[view];
        },
        getView: function (view) {
            return this._views[view];
        },
        _clear: function () {
            this._context.clearRect(0, 0, this._context.canvas.width, this._context.canvas.height);
        }
    };

    return Solaris;
});
