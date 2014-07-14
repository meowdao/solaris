define(function (require) {
    "use strict";

    var backbone = require("backbone");
    var handlebars = require("handlebars");
    var solaris = require("solaris/init");

    var config = {
        stars: {
            sun: {
                body: true,
                planets: {},
                dwarfs: {}
            }
        }
    };

    return backbone.View.extend({
        el: ".content",

        events: {
            "change form": "onChange"
        },

        template: handlebars.partials._objects,

        render: function () {
            var data = {
                sections: {
                    planets: ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"],
                    dwarfs: ["ceres", "pallas", "vesta", "sedna", "haumea", "makemake", "eris"]
                }
            };
            this.$el.find("form").append(this.template(data));
            solaris(config);
        },

        onChange: function(e){
            var group = this.$(e.target).closest("[data-group]").data("group"); // TODO fix me

            if (group === "stars"){
                return false;
            }

            if (e.target.checked) {
                config.stars.sun[group][e.target.name] = {
                    orbit: true,
                    label: true,
                    body: true
                };
            } else {
                delete config.stars.sun[group][e.target.name];
            }

            solaris(config);
        },

        remove: function () {
            console.log("remove");
        },

        cleanup: function () {
            this.$el.removeClass("loading");
        }

    });
});
