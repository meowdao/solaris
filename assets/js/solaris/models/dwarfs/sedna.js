define([
    "require",
    "./dwarf"
],function (require, AbstractPlanet) {
    "use strict";

    var _ = require("underscore");

    var Sedna = function () {

    };

    Sedna.prototype = new AbstractPlanet();

    _.extend(Sedna.prototype, {
        _optionsDefault: {
            body: {
                color: "#ff00ff"
            }
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

    return new Sedna();
});
