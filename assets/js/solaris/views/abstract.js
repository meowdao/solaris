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
        _size: {},
        init: function (context, options, params) {
            this._context = context;
            this._size = {
                width: this._context.canvas.width,
                height: this._context.canvas.height
            };
            _.extend(this._options, options);
            _.extend(this._params, params);
            //console.log(this);
            this._init(options);
        },
        _init: function(){
            // abstract
            throw "Abstract method not implemented";
        },
        draw: function(){
            // abstract
            throw "Abstract method not implemented";
        },
        loadViews: function(){
            // abstract
            throw "Abstract method not implemented";
        },
        abort: function(){
            _.forEach(this._views, function (view) {
                view.abort();
            });
        }
    };

    return AbstractView;
});