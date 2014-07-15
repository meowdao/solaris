define(function (require) {
    "use strict";

    var _ = require("underscore");

    var AbstractView = function () {
        // empty
    };

    AbstractView.prototype = {
        _context: null,
        _params: {},
        _options: {
            center: 11,
            scale: 1
        },
        _views: {},
        setOptions: function (context, options, params) {
            this._context = context;
            _.extend(this._options, options);
            _.extend(this._params, params);
            this._setOptions(options);
        },
        _setOptions: function () {
            // abstract
        },
        draw: function(){
            // abstract
        },
        clearCache: function(){
            // abstract
        },
        abort: function(){
            _.forEach(this._views, function (view) {
                view.abort();
            });
        }
    };

    return AbstractView;
});