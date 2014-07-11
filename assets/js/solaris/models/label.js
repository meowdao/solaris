define(function (require) {
    "use strict";

    var _ = require("underscore");
    var $ = require("jquery");

    // abstract class
    var Label = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Label.prototype = {
        _context: null,
        _options: {},
        _optionsDefault: {
            color: "#ffffff"
        },
        _promise: null,
        _cache: {},
        init: function (options) {
            //console.log("Label:init", options, this._options)
            this._options = _.extend({}, this._optionsDefault, options);
            this._cache = {}; // override prototype
        },
        getPosition: function (data) {
            this._promise = $.ajax({
                url: "/ephemeris/getObject",
                data: {
                    date: new Date().toISOString().slice(0, 10),
                    object: this._options.index,
                    center: data.center
                }
            });
            return this._promise;
        },
        abort: function(){
            if (this._promise) {
                this._promise.abort();
                this._promise = null;
            }
        },
        getImage: function(draw, data){
            if (!this._cache[data.center]) {
                this._cache[data.center] = this.getPosition(data)
                    .then(draw);
            }
            return this._cache[data.center];
        }
    };

    return Label;
});
