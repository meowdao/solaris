define([
    "require",
    "./dwarf"
],function (require, AbstractPlanet) {
    "use strict";

    var _ = require("underscore");

    var Makemake = function () {

    };

    Makemake.prototype = new AbstractPlanet();

    _.extend(Makemake.prototype, {
        _optionsDefault: {
            body: {
                color: "#ffff00"
            }
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

    return new Makemake();
});
