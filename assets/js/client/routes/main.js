define(function (require) {
    "use strict";

    var backbone = require("backbone");

    return backbone.Router.extend({
        routes: {
            "": "index"
        },
        index: function () {
            var formView = new (require("../views/form"))();
            formView.render();
            var canvasView = new (require("../views/canvas"))();
            canvasView.render();
        }
    });
});
