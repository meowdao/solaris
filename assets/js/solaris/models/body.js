define(["require",
    "./orbit",
    "./label"
], function (require) {
    "use strict";

    var _ = require("underscore");
    var $ = require("jquery");

    // abstract class
    var Body = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Body.prototype = {
        _optionsDefault: {
        },
        _options: {},
        _promise: null,
        _cache: {},
        init: function (options, params) {
            //console.log("Body:init", options);
            this._options = _.extend({}, this._optionsDefault, options);
            this._params = params;
            this._cache = {}; // override prototype
        },
        abort: function(){
            if (this._promise) {
                this._promise.abort();
                this._promise = null;
            }
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
        getImage: function(draw, data){
            if (!this._cache[data.center]) {
                this._cache[data.center] = this.getPosition(data)
                    .then(draw);
            }
            return this._cache[data.center];
        }
    };

    return Body;
});
