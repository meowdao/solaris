define([
    "require",
    "backbone",
    "../views/view",
    "../views/index",
    "../views/error"
], function (require, Backbone) {
    "use strict";

    var view = null;

    return Backbone.Router.extend({
        routes: {
            "": "index",
            "view/:view": "view",
            "*path": "defaultRoute"
        },
        index: function () {
            if (view) {
                view.remove();
            }
            view = new (require("../views/index"))();
            view.render();
        },
        view: function (name) {
            if (view) {
                view.remove();
            }
            view = new (require("../views/view"))({view: name});
            view.render();
        },
        defaultRoute: function () {
            if (view) {
                view.remove();
            }
            view = new (require("../views/error"))();
            view.render();
        }
    });
});

