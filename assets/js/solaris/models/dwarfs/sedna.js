define(function (require) {
    "use strict";

    var AbstractPlanet = require("./dwarf");
    var _ = require("underscore");

    var Sedna = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Sedna.prototype = new AbstractPlanet();

    _.extend(Sedna.prototype, {
        _optionsDefault: {
            color: "#ff00ff"
        },
        _params: {
            name: "Sedna",
            index: 12 + 90377,
            mass: null,
            diameter: null,
            days: 11400 * 365, // approx
            orbit: {
                aphelion: 140173,
                perihelion: 11369
            }
        }
    });

    return Sedna;
});
