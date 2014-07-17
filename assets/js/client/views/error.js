define([
    "require",
    "backbone",
    "../../templates"
], function (require, Backbone, templates) {
    "use strict";

    return Backbone.View.extend({
        el: "article .wrapper",

        render: function(){
            this.$el.html(templates["error"]({error: {message: "Page Not Found!"}}));
        },

        remove: function () {
            this.$el.empty();
        }

    });
});
