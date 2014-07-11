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
        _draft: document.createElement("canvas").getContext("2d"),
        init: function (context, options, params) {
            this._context = context;
            _.extend(this._options, options);
            _.extend(this._params, params);

            this._draft.canvas.width = this._context.canvas.width;
            this._draft.canvas.height = this._context.canvas.height;

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