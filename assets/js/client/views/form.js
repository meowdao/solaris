define(function (require) {
    "use strict";

    var backbone = require("backbone");
    var handlebars = require("handlebars");

    return backbone.View.extend({
        el: "form",

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
            this.$el.prepend(this.template(data));
        },

        remove: function () {
            console.log("remove");
        },

        cleanup: function () {
            this.$el.removeClass("loading");
        }

    });
});
