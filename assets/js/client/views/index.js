define([
    "Backbone",
    "../../templates"
], function (Backbone, templates) {
    "use strict";

    return Backbone.View.extend({
        el: "article .wrapper",

        render: function () {
            this.$el.html(templates["index"]());
        },

        remove: function () {
            this.$el.empty();
        }

    });
});
