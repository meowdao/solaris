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
            this._loadViews(options.views);
            this._loadModels(options.models);
        },
        _loadViews: function (views) {
            _.forEach(views, function (options, view) {
                this._views[view] = require("../views/objects/" + view)(this);
                this._views[view].setOptions(_.extend({}, this._options[view], options === true ? {} : options), this._params);
            }, this);
        },
        _loadModels: function (models) {
            _.forEach(models, function (options, model) {
                this._views[model] = require("../models/" + model);
                this._views[model].setOptions(options);
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
