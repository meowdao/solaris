define(function (require) {
    "use strict";

    var _ = require("underscore");
    var $ = require("jquery");

    // abstract class
    var Proto = function () {

    };

    Proto.prototype = {
        _optionsDefault: {
            fillStyle: "#ffffff",
            strokeStyle: "#ffffff",
            font: "bold 12px sans-serif"
        },
        _options: {},
        _promises: {},
        _params: {},
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
            if (!this._cache.has(view._params)) {
                // console.log("NEW VIEW")
                this._cache.set(view._params, new WeakMap());
            }
            if (!this._cache.get(view._params).has(this)) {
                // console.log("NEW THIS")
                this._cache.get(view._params).set(this, this.getPosition(view._params)
                    .then(view._extract(this)));
            }
            return this._cache.get(view._params).get(this);
        }
    };

    return Proto;
});
