define([
    "require",
    "Backbone",
    "../../templates",
    "../views/hypotrochoid",
    "../views/natal",
    "../views/system"
], function (require, Backbone, templates) {
    "use strict";

    return Backbone.View.extend({
        el: "article .wrapper",

        options: {},
        view: null,

        initialize: function (options) {
            this.options = options;
        },

        render: function(){
            this.$el.html(templates["view"]());
            this.view = new (require("../views/" + this.options.view))();
            this.view.render();
        },

        remove: function(){
            this.view.remove();
            this.$el.empty();
        }


    });
});
