define(function (require) {
    "use strict";

    var backbone = require("backbone");
    var handlebars = require("handlebars");
   
    var solaris = require("solaris/init");


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
            solaris({stars: {sun: {}}});
        },

        onSubmit: function (e) {
            var data = {
                stars: {
                    sun: {
                        planets: {},
                        dwarfs: {}
                    }
                }
            };

            var orbits = this.$(e.target).find("[name=orbits]").prop("checked");
            var labels = this.$(e.target).find("[name=labels]").prop("checked");


            this.$(e.target).find("[data-group=planets] [type=checkbox]").each(function (i, e) {
                if (e.checked) {
                    data.stars.sun.planets[e.name] = {
                        orbit: orbits,
                        label: labels
                    };
                }
            });

            this.$(e.target).find("[data-group=dwarfs] [type=checkbox]").each(function (i, e) {
                if (e.checked) {
                    data.stars.sun.dwarfs[e.name] = {
                        orbit: orbits,
                        label: labels
                    };
                }
            });

            solaris(data);

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
