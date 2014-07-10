define(function (require) {
    "use strict";

    var AbstractPlanet = require("./dwarf");
    var _ = require("underscore");

    var Makemake = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Makemake.prototype = new AbstractPlanet();

    _.extend(Makemake.prototype, {
        _optionsDefault: {
            color: "#ffff00"
        },
        _params: {
            name: "Makemake",
            index: 12 + 136472,
            mass: null,
            diameter: null,
            days: 113183,
            orbit: {
                aphelion: 7939,
                perihelion: 5760
            }
        }
    });

    return Makemake;
});
