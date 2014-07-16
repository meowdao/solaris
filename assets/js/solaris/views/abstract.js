define(function (require) {
    "use strict";

    var _ = require("underscore");

    var AbstractView = function () {
        // empty
    };

    AbstractView.prototype = {
        _context: null,
        _params: {
            center: 11,
            scale: 1
        },
        _views: {},
        setOptions: function (options) {
            this._loadModels(options.models);
        },
        setParams: function(params){
            this._params = _.extend({}, this._params, params);
        },
        _setOptions: function () {
            // abstract
        },
        draw: function(){
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