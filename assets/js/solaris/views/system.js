define(["require",
    "../models/object",
    "../models/orbit",
    "../models/label",
    "../models/stars/sun",
    "../constants"
], function (require) {
    "use strict";

    var AbstractView = require("./abstract");
    var AbstractObject = require("../models/object");
    var Orbit = require("../models/orbit");
    var Label = require("../models/label");
    var _ = require("underscore");
    var constants = require("../constants");

    // http://en.wikipedia.org/wiki/Solar_System
    var SolarSystemView = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    SolarSystemView.prototype = new AbstractView();

    _.extend(SolarSystemView.prototype, {
        _views: {},
        _init: function (options) {
            //console.log("SolarSystemView", options, shared);
            _.forEach(options, function (views, dir) {
                //console.log("views dir",views, dir)
                _.forEach(views, function (options, view) {
                    //console.log("options view",options, view)
                    this._views[view] = new (require("../models/" + dir + "/" + view))(options);
                }, this);
            }, this);
        },
        draw: function () {
            this._draw(this);
        },
        _draw: function (obj) {
            // TODO return promise
            _.forEach(obj._views, function (view) {
                //console.log("SolarSystemView:drawing", view);
                view.getImage(this._extract(view), {center: this._params.center})
                    .then(function (img) {
                        this._context.drawImage(img, 0, 0);
                    }.bind(this));
                this._draw(view);
            }, this);
        },
        _drawObject: function (position, view) {
            //console.log("then", this._options)
            this._draft.beginPath();
            this._draft.arc(
                (this._draft.canvas.width / 2 + position[0] * constants.au / 1e6 / this._params.scale),
                (this._draft.canvas.height / 2 + position[1] * constants.au / 1e6 / this._params.scale),
                5, //(this._params.radius / 1e5),
                0, 2 * Math.PI, false);
            this._draft.fillStyle = view._options.color;
            this._draft.fill();
            this._draft.closePath();
        },
        _drawOrbit: function (positions, view) {
            //console.log("then", this._options)
            this._draft.beginPath();
            //console.log("moveto", this._draft.canvas.width / 2 + positions[0[0] * au / 1e6, this._draft.canvas.height / 2 + positions[0][1] * au / 1e6)
            this._draft.moveTo(this._draft.canvas.width / 2 + positions[0][0] * constants.au / 1e6 / this._params.scale, this._draft.canvas.height / 2 + positions[0][1] * constants.au / 1e6 / this._params.scale);
            for (var i = 1, j = positions.length; i < j; i++) {
                //console.log(i, this._draft.canvas.width / 2 + positions[i][0] * au / 1e6, this._draft.canvas.height / 2 + positions[i][1] * au / 1e6)
                this._draft.lineTo(this._draft.canvas.width / 2 + positions[i][0] * constants.au / 1e6 / this._params.scale, this._draft.canvas.height / 2 + positions[i][1] * constants.au / 1e6 / this._params.scale);
            }
            this._draft.strokeStyle = view._options.color;
            this._draft.stroke();
            this._draft.closePath();
        },
        _drawLabel: function (position, view) {
            this._draft.fillStyle = view._options.color;
            this._draft.font = "bold 12px sans-serif";
            this._draft.fillText(view._options.name, this._draft.canvas.width / 2 + position[0] * constants.au / 1e6 / this._params.scale + 10, this._draft.canvas.height / 2 + position[1] * constants.au / 1e6 / this._params.scale + 10);
        },
        _extract: function (view) {
            return function (position) {
                this._draft.save();

                if (view instanceof AbstractObject) {
                    this._drawObject(position, view);
                } else if (view instanceof Orbit) {
                    this._drawOrbit(position, view);
                } else if (view instanceof Label) {
                    this._drawLabel(position, view);
                } // TODO add rings

                this._draft.restore();

                var img = new Image();
                img.src = this._draft.canvas.toDataURL();
                this._clear();
                return img;
            }.bind(this);
        },
        _clear: function () {
            this._draft.clearRect(0, 0, this._draft.canvas.width, this._draft.canvas.height);
        }
    });

    return SolarSystemView;
});
