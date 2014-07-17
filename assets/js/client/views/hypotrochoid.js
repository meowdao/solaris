define([
    "backbone",
    "handlebars",
    "solaris/core"
], function (Backbone, handlebars, solaris) {
    "use strict";

    // http://hughsk.io/hypotrochoid/
    var options = {
        models: {
            "stars/sun": {
                models: {
                    "planets/venus": {
                        views: {
                            orbit: true,
                            label: true,
                            body: true
                        }
                    },
                    "planets/earth": {
                        views: {
                            orbit: true,
                            label: true,
                            body: true
                        }
                    }
                },
                views: {
                    //body: true
                }
            }
        }
    };

    var params = {
        center: 11,
        scale: 1,
        period: 3000,
        step: 7
    };

    return Backbone.View.extend({
        el: ".content",

        template: handlebars.partials._form_hypotrochoid,

        initialize: function () {
            solaris.loadViews(["background", "grid", "legend", "hypotrochoid"]);
        },

        render: function () {
            this.$el.find("form").append(this.template());
            this.run();
        },

        run: function () {
            solaris.setContext(document.getElementById("solaris").getContext("2d"));
            solaris.getView("hypotrochoid").setOptions(options);
            solaris.getView("hypotrochoid").setParams(params);
            solaris.draw();
        },

        remove: function () {
            solaris.clearViews();
        }

    });
});
