define(function (require) {
    "use strict";

    var backbone = require("backbone");
    var handlebars = require("handlebars");
   
    var solaris = require("solaris/init");

    var config = {
        stars: {
            sun: {
                planets: {
                    jupiter: {
                        orbit: true,
                        label: true
                    },
                    saturn: {
                        orbit: true
                    }
                },
                dwarfs: {}
            }
        }
    };

    return backbone.View.extend({
        el: ".content",

        events: {
            "submit form": "onSubmit"
        },

        template: handlebars.partials._objects,

        render: function () {
            var data = {
                sections: {
                    stars: ["sun"],
                    planets: ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"],
                    dwarfs: ["ceres", "pallas", "vesta", "sedna", "haumea", "makemake", "eris"],
                    satellites: ["moon"],
                    misc: ["orbits", "labels"]
                }
            };
            this.$el.find("form").prepend(this.template(data));
            solaris(config);
        },

        onSubmit: function (e) {
            var orbits = this.$(e.target).find("[name=orbits]").prop("checked");
            var labels = this.$(e.target).find("[name=labels]").prop("checked");

            this.$(e.target).find("[data-group=planets] [type=checkbox]").each(function (i, e) {
                if (e.checked) {
                    config.stars.sun.planets[e.name] = {
                        orbit: orbits,
                        label: labels
                    };
                } else {
                    delete config.stars.sun.planets[e.name];
                }
            });

            this.$(e.target).find("[data-group=dwarfs] [type=checkbox]").each(function (i, e) {
                if (e.checked) {
                    config.stars.sun.dwarfs[e.name] = {
                        orbit: orbits,
                        label: labels
                    };
                } else {
                    delete config.stars.sun.dwarfs[e.name];
                }
            });

            solaris(config);

            e.preventDefault();
        },

        remove: function () {
            console.log("remove");
        },

        cleanup: function () {
            this.$el.removeClass("loading");
        }

    });
});
