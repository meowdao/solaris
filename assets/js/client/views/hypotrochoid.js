define(function (require) {
    "use strict";

    var backbone = require("backbone");
    var handlebars = require("handlebars");
    var solaris = require("solaris/core");


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

    return backbone.View.extend({
        el: ".content",

        events: {

        },

        template: handlebars.partials._form_hypotrochoid,

        initialize: function () {
            solaris.loadViews(["background", "grid", "legend", "hypotrochoid"]);
            solaris.setContext(document.getElementById("solaris").getContext("2d"));
            solaris.getView("hypotrochoid").setOptions(options);
            solaris.getView("hypotrochoid").setParams(params);
            solaris.draw();

            this.$el.find("form").append(this.template({}));
        }

    });
});
