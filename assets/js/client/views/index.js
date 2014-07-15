define(function (require) {
    "use strict";

    var backbone = require("backbone");
    var handlebars = require("handlebars");
    var solaris = require("solaris/core");

    var config = {
        stars: {
            sun: {
                body: true,
                planets: {},
                dwarfs: {}
            }
        }
    };

    var options = {
        center: 11,
        scale: 1
    };

    var data = {
        planets: ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"],
        dwarfs: ["ceres", "pallas", "vesta", "sedna", "haumea", "makemake", "eris"]
    };

    return backbone.View.extend({
        el: ".content",

        events: {
            "change select": "onSelect",
            "change input": "onChange"
        },

        template: handlebars.partials._objects,

        initialize: function () {
            solaris.setContext(document.getElementById("solaris").getContext("2d"));
            solaris.setOptions(options);
            this.setUp();
        },

        render: function () {
            this.$el.find("form").append(this.template(data));
            this.disable(options);
        },

        disable: function (options) {
            this.$el.find("form").find("[type=checkbox]").each(function (i, e) {
                if ((options.scale === 1 && (data.planets.indexOf(e.name) > 3 || data.dwarfs.indexOf(e.name) > 2)) ||
                    (options.scale === 10 && (data.dwarfs.indexOf(e.name) > 2))) {
                    this.$(e).prop("disabled", true);
                } else {
                    this.$(e).prop("disabled", false);
                }
            }.bind(this));
        },

        onChange: function (e) {
            var group = this.$(e.target).closest("[data-group]").data("group");

            if (e.target.checked) {
                config.stars.sun[group][e.target.name] = {
                    orbit: true,
                    label: true,
                    body: true
                };
            } else {
                delete config.stars.sun[group][e.target.name];
            }

            this.setUp();
        },

        onSelect: function (e) {
            options.scale = ~~e.target.value;
            solaris.setOptions(options);
            this.setUp();
            this.disable(options);
        },

        setUp: function () {
            solaris.loadView("void");
            solaris.loadView("grid");
            solaris.loadView("system", config);
        }

    });
});
