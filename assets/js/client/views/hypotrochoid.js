define(function (require) {
    "use strict";

    var backbone = require("backbone");
    var handlebars = require("handlebars");
    var solaris = require("solaris/core");

    var options = {
        stars: {
            sun: {
                //body: true,
                planets: {
                    earth: {
                        orbit: true
                    },
                    venus: {
                        orbit: true
                    }
                },
                dwarfs: {}
            }
        }
    };

    var params = {
        center: 11,
        scale: 1,
        days: 300
    };

    return backbone.View.extend({
        el: ".content",

        events: {

        },

        template: handlebars.partials._objects,

        initialize: function () {
            solaris.loadViews(["void", "grid", "hypotrochoid"]);
            solaris.setContext(document.getElementById("solaris").getContext("2d"));
            solaris.getView("hypotrochoid").setOptions(options);
            solaris.getView("hypotrochoid").setParams(params);
            solaris.draw();
        }

    });
});
