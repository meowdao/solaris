define(["require", "solaris/init"], function (require) {
    "use strict";

    var backbone = require("backbone");

    return backbone.View.extend({
        el: "canvas",

        render: function () {
            //this.$el.html(this.template());
            require("solaris/init");
        }

    });
});
