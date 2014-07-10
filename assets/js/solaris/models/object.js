define(["require",
    "./orbit",
    "./label"
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
        _options: {},
        _views: {},
        _promise: null,
        init: function (options) {
            //console.log("AbstractObject:init", options, shared)
            this._views = {};
            this._options = _.extend({}, this._optionsDefault, options);
            if (this._options.orbit) {
                //console.log("INIT:orbit", this._options.orbit)
                this._views.orbit = new (require("./orbit"))(_.extend({days: this._params.days, index: this._params.index, step: 1}, this._options.orbit));
            }
            if (this._options.label) {
                //console.log("INIT:label", this._options.label)
                this._views.label = new (require("./label"))(_.extend({days: this._params.days, index: this._params.index, step: 1, name: this._params.name}, this._options.label));
            }
            this._init(options);
        },
        _init: function (options) {
            //console.log("AbstractObject", options);
            /*_.forEach(options.sub, function (options, view) {
                this._views[view] = new (require("../models/planets/" + view))(this._context, options, shared);
            }, this);*/

            _.forEach(options, function (views, dir) {
                //console.log("views dir",views, dir)
                _.forEach(views, function (options, view) {
                    //console.log("options view",options, view)
                    this._views[view] = new (require("../models/" + dir + "/" + view))(options);
                }, this);
            }, this);
        },
        abort: function(){
            if (this._promise) {
                this._promise.abort();
                this._promise = null;
            }
            _.forEach(this._views, function (view) {
                view.abort();
            }, this);
        },
        getPosition: function (data) {
            this._promise = $.ajax({
                url: "/ephemeris/getObject",
                data: {
                    date: new Date().toISOString().slice(0, 10),
                    object: this._params.index,
                    center: data.center
                }
            });
            return this._promise;
        },
        getAverageOrbit: function () {
            //console.log("Z", this)
            return (this._params.orbit.perihelion + this._params.orbit.aphelion) / 2;
        }
    };

    return AbstractObject;
});
