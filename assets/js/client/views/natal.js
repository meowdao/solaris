define(function (require) {
    "use strict";

    var backbone = require("backbone");
    var handlebars = require("handlebars");
    var solaris = require("solaris/core");

    return backbone.View.extend({
        el: ".content",

        events: {

        },

        template: handlebars.partials._form_natal,

        initialize: function () {
            solaris.loadViews(["natal"]);
            solaris.setContext(document.getElementById("solaris").getContext("2d"));
            solaris.draw();

            this.$el.find("form").append(this.template({}));
        }

    });
});
