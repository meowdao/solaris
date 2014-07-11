define(["require",
    "./orbit",
    "./label",
    "./body"
], function (require) {
    "use strict";

    var _ = require("underscore");
    var $ = require("jquery");

    // abstract class
    var AbstractObject = function () {

    };

    AbstractObject.prototype = {
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
        init: function (options) {
            //console.log("AbstractObject:init", options, shared)
            this._views = {};
            this._options = _.extend({}, this._optionsDefault, options);
            this._init(options);
        },
        _init: function (options) {
            //console.log("AbstractObject", options);
            /*_.forEach(options.sub, function (options, view) {
                this._views[view] = new (require("../models/planets/" + view))(this._context, options, shared);
            }, this);*/

            _.forEach(options, function (views, dir) {
                //console.log("views dir",views, dir)
                if (dir === "orbit" || dir === "label" || dir === "body" || dir === "belt") {
                    this._views[dir] = new (require("./" + dir))(_.extend({}, this._optionsDefault[dir], options[dir]), this._params);
                } else {
                    _.forEach(views, function (options, view) {
                        //console.log("options view",options, view)
                        this._views[view] = new (require("../models/" + dir + "/" + view))(options);
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
