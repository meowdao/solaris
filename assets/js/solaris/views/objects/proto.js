define(function (require) {
    "use strict";

    var _ = require("underscore");
    var $ = require("jquery");

    // abstract class
    var Proto = function () {

    };

    Proto.prototype = {
        _optionsDefault: {
            color: "#ffffff"
        },
        _options: {},
        _promises: {},
        _cache: new WeakMap(),
        setOptions: function (options, params) {
            this._options = _.extend({}, this._optionsDefault, options);
            this._params = params;
        },
        abort: function () {
            _.forEach(this._promises, function (promise, data, list) {
                if (promise.status() === "pending") {
                    promise.abort();
                    delete list[data];
                }
            });
        },
        getPosition: function (params) {
            // i wish i can use WeakMap here
            var data = {
                    date: new Date().toISOString().slice(0, 10),
                    object: this._params.index,
                    center: params.center
                },
                json = JSON.stringify(data);
            if (!this._promises[json]) {
                this._promises[json] = $.ajax({
                    url: this._url,
                    data: data
                });
            }
            return this._promises[json];
        },
        getImage: function (view) {
            if (!this._cache.has(view)) {
                this._cache.set(view, new WeakMap());
            }
            if (!this._cache.get(view).has(this)) {
                this._cache.get(view).set(this, this.getPosition(view._params)
                    .then(view._extract(this)));
            }
            return this._cache.get(view).get(this);
        }
    };

    return Proto;
});
