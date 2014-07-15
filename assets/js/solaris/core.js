define(["require",
    "./views/void",
    "./views/grid",
    "./views/system",
    "./views/hypotrochoid"
], function (require) {
    "use strict";

    var _ = require("underscore");

    var Solaris = function () {

    };

    Solaris.prototype = {
        _context: null,
        _views: {},
        setContext: function (context) {
            this._context = context;

            // TODO fix me
            this._context.drawImageData = function (data) {
                var img = new Image();
                img.src = data;
                this.drawImage(img, 0, 0);
            };
        },
        draw: function () {
            _.invoke(this._views, "draw", this._context);
        },
        setOptions: function (options) {
            _.invoke(this._views, "setOptions", options);
        },
        setParams: function (params) {
            _.invoke(this._views, "setParams", params);
        },
        loadViews: function (views) {
            _.map(views,function(view){
                return this.loadView(view);
            }.bind(this));
        },
        loadView: function (view) {
            this._views[view] = require("./views/" + view);
            return this._views[view];
        },
        getView: function (view) {
            return this._views[view];
        },
        deleteView: function (view) {
            return this._views[view] = null;
        },
        clearViews: function () {
            return this._views = {};
        }
    };

    return new Solaris();
});
