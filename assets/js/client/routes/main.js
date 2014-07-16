define([
    "require",
    "../views/hypotrochoid",
    "../views/natal",
    "../views/system"
], function (require) {
    "use strict";

    var backbone = require("backbone");

    return backbone.Router.extend({
        routes: {
            "view/:view": "any"
        },
        any: function (view) {
            new (require("../views/" + view))();
        }
    });
});
