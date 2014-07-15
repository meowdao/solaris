define([
    "require",
    "../views/objects/orbit",
    "../views/objects/label",
    "../views/objects/body"
], function (require) {
    "use strict";

    var _ = require("underscore");
    var $ = require("jquery");

    // abstract class
    var AbstractObject = function () {

    };

    AbstractObject.prototype = {
        _options: {},
        _params: {
            index: 0,
            radius: 0,
            mass: 0,
            days: 0,
            speed: 0,
            orbit: {
                // http://en.wikipedia.org/wiki/Apsis
                aphelion: 0,
                perihelion: 0
            }
        },
        _views: {},
        setOptions: function (options) {
            this._views = {};
            this._options = _.extend({}, this._optionsDefault, options);
            this._setOptions(options);
        },
        _setOptions: function (options) {
            _.forEach(options, function (views, dir) {
                if (dir === "orbit" || dir === "label" || dir === "body" || dir === "belt") {
                    this._views[dir] = require("../views/objects/" + dir)(this);
                    this._views[dir].setOptions(_.extend({}, this._optionsDefault[dir], options[dir]), this._params);
                } else {
                    _.forEach(views, function (options, view) {
                        this._views[view] = require("../models/" + dir + "/" + view);
                        this._views[view].setOptions(options);
                    }, this);
                }
            }, this);
        },
        abort: function () {
            _.forEach(this._views, function (view) {
                view.abort();
            }, this);
        },
        getImage: function () {
            return new $.Deferred().reject().promise();
        }
    };

    return AbstractObject;
});
