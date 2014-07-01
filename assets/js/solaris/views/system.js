define(["require",
    "../models/object",
    "../models/orbit",
    "../models/label",
    "../models/stars/sun"
], function (require) {
    "use strict";

    var AbstractView = require("./abstract");
    var AbstractObject = require("../models/object");
    var Orbit = require("../models/orbit");
    var Label = require("../models/label");
    var _ = require("LoDash");
    var constants = require("../constants");

    // http://en.wikipedia.org/wiki/Solar_System
    var SolarSystemView = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    SolarSystemView.prototype = new AbstractView();

    _.extend(SolarSystemView.prototype, {
        _views: {},
        _init: function (options, shared) {
            //console.log("SolarSystemView", options, shared);
            _.forEach(options, function (views, dir) {
                //console.log("views dir",views, dir)
                _.forEach(views, function (options, view) {
                    //console.log("options view",options, view)
                    this._views[view] = new (require("../models/" + dir + "/" + view))(options, shared);
                }, this);
            }, this);
            /*$.ajaxPrefilter(function (options, originalOptions) {
                options.data = $.param($.extend(originalOptions.data, { center: this._options.center }));
            }.bind(this));*/
        },
        draw: function () {
            this._draw(this);
        },
        _draw: function (obj) {
            // TODO return promise
            _.forEach(obj._views, function (view) {
                //console.log("SolarSystemView:drawing", view);
                if (view instanceof AbstractObject) {
                    view.getPosition({center:this._params.center}).then(function (position) {
                        this._drawObject(position, view);
                        if (view._options.label) {
                            this._drawLabel(position, view);
                        }
                    }.bind(this));
                } else if (view instanceof Orbit) {
                    view.getPositions({center:this._params.center}).then(function (positions) {
                        this._drawOrbit(positions, view);
                    }.bind(this));
                } else if (view instanceof Label) {
                    // already handled, do nothing
                } // TODO add rings
                this._draw(view);
            }, this);
        },
        _drawObject: function (position, view) {
            //console.log("then", this._options)
            this._context.save();
            this._context.beginPath();
            this._context.arc(
                (this._size.width / 2 + position.xv[0] * constants.au / 1e6 / this._params.scale),
                (this._size.height / 2 + position.xv[1] * constants.au / 1e6 / this._params.scale),
                5, //(this._params.radius / 1e5),
                0, 2 * Math.PI, false);
            this._context.fillStyle = view._options.color;
            this._context.fill();
            this._context.closePath();
            this._context.restore();
        },
        _drawOrbit: function (positions, view) {
            //console.log("then", this._options)
            this._context.save();
            this._context.beginPath();
            //console.log("moveto", this._size.width / 2 + positions[0].xv[0] * au / 1e6, this._size.height / 2 + positions[0].xv[1] * au / 1e6)
            this._context.moveTo(this._size.width / 2 + positions[0].xv[0] * constants.au / 1e6 / this._params.scale, this._size.height / 2 + positions[0].xv[1] * constants.au / 1e6 / this._params.scale);
            for (var i = 1, j = positions.length; i < j; i++) {
                //console.log(i, this._size.width / 2 + positions[i].xv[0] * au / 1e6, this._size.height / 2 + positions[i].xv[1] * au / 1e6)
                this._context.lineTo(this._size.width / 2 + positions[i].xv[0] * constants.au / 1e6 / this._params.scale, this._size.height / 2 + positions[i].xv[1] * constants.au / 1e6 / this._params.scale);
            }
            this._context.strokeStyle = view._options.color;
            this._context.stroke();
            this._context.closePath();
            this._context.restore();
        },
        _drawLabel: function (position, view) {
            this._context.save();
            //this._context.fillStyle = view._options.color;
            this._context.fillStyle = view._views.label._options.color;
            this._context.font = "bold 12px sans-serif";
            //this._context.fillText(view._options.name, this._size.width / 2 + position.xv[0] * constants.au / 1e6 / this._params.scale + 10, this._size.height / 2 + position.xv[1] * constants.au / 1e6 / this._params.scale + 10);
            this._context.fillText(view._params.name, this._size.width / 2 + position.xv[0] * constants.au / 1e6 / this._params.scale + 10, this._size.height / 2 + position.xv[1] * constants.au / 1e6 / this._params.scale + 10);
            this._context.restore();
        }
    });

    return SolarSystemView;
});
