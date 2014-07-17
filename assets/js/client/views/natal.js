define([
    "Backbone",
    "handlebars",
    "solaris/core"
], function (Backbone, handlebars, solaris) {
    "use strict";

    return Backbone.View.extend({
        el: ".content",

        template: handlebars.partials._form_natal,

        initialize: function () {
            solaris.loadViews(["natal"]);
        },

        render: function () {
            this.$el.find("form").append(this.template());
            this.run();
        },

        run: function () {
            solaris.setContext(document.getElementById("solaris").getContext("2d"));
            solaris.draw();
        },

        remove: function(){
            solaris.clearViews();
        }

    });
});
