define([
    "backbone",
    "handlebars",
    "solaris/core"
], function (Backbone, handlebars, solaris) {
    "use strict";

    var options = {
        models: {
            "stars/sun": {
                models: {},
                views: {
                    body: true
                }
            }
        }
    };

    var params = {
        center: 11,
        scale: 1
    };

    var data = {
        planets: ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"],
        dwarfs: ["ceres", "pallas", "vesta", "sedna", "haumea", "makemake", "eris"]
    };

    return Backbone.View.extend({
        el: ".content",

        events: {
            "change select": "onSelect",
            "change input": "onChange"
        },

        template: handlebars.partials._form_system,

        initialize: function () {
            solaris.loadViews(["background", "grid", "legend", "system"]);
        },

        render: function () {
            this.$el.find("form").append(this.template(data));
            this.disable(params);
            this.run();
        },

        run: function () {
            solaris.setContext(document.getElementById("solaris").getContext("2d"));
            solaris.getView("system").setOptions(options);
            solaris.getView("system").setParams(params);
            solaris.draw();
        },

        disable: function (options) {
            this.$el.find("form").find("[type=checkbox]").each(function (i, e) {
                if ((options.scale === 1 && (data.planets.indexOf(e.name) > 3 || data.dwarfs.indexOf(e.name) > 2)) ||
                    (options.scale === 10 && (data.dwarfs.indexOf(e.name) > 2))) {
                    this.$(e).prop("disabled", true).prop("checked", false);
                } else {
                    this.$(e).prop("disabled", false);
                }
            }.bind(this));
        },

        onChange: function (e) {
            var group = this.$(e.target).closest("[data-group]").data("group");

            if (e.target.checked) {
                options.models["stars/sun"].models[group + "/" + e.target.name] = {
                    views: {
                        orbit: true,
                        label: true,
                        body: true
                    }
                };
            } else {
                delete options.models["stars/sun"].models[group + "/" + e.target.name];
            }

            solaris.getView("system").setOptions(options);
            solaris.draw();
        },

        onSelect: function (e) {
            params.scale = ~~e.target.value;
            this.disable(params);
            solaris.setParams(params);
            solaris.draw();
        },

        remove: function(){
            solaris.clearViews();
        }

    });
});
