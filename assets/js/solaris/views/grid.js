define(function (require) {
    "use strict";

    var AbstractView = require("./abstract");
    var _ = require("LoDash");

    var GridView = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };
    GridView.prototype = new AbstractView();

    _.extend(GridView.prototype, {
        _options: {
            step: 10,
            lineWidth: 1,
            strokeStyle: "#c0c0c0",
            fillStyle: "#c0c0c0"
        },
        _init: function () {
            // does nothing
        },
        draw: function () {
            this._draw(1);
            this._draw(10);

            this._context.save();
            this._context.beginPath();
            this._context.fillStyle = this._options.fillStyle;
            this._context.rect(this._size.width - 100, this._size.height - 30, this._size.width, this._size.height);
            this._context.fill();
            this._context.restore();

            var text = "1px = " + (1e6 * this._params.scale).toExponential() + "km";
            this._context.save();
            this._context.fillStyle = "back";
            this._context.font = "bold 12px sans-serif";
            this._context.fillText(text, this._size.width - 100 + (100 - this._context.measureText(text).width) / 2, this._size.height - 30 + 30 / 2 + 4); // 4 magic number
            this._context.restore();

        },
        _draw: function (x) {
            this._context.save();
            this._context.beginPath();

            // vertical
            _.range(this._options.step * x, this._size.width, this._options.step * x).forEach(function (i) {
                this._context.moveTo(0, i);
                this._context.lineTo(this._size.height, i);
            }, this);

            // horizontal
            _.range(this._options.step * x, this._size.height, this._options.step * x).forEach(function (i) {
                this._context.moveTo(i, 0);
                this._context.lineTo(i, this._size.width);
            }, this);

            // fix for double line
            this._context.moveTo(0, 0);

            this._context.closePath();
            this._context.strokeStyle = this._options.strokeStyle;
            this._context.stroke();
            this._context.restore();
        }
    });

    return GridView;
});
