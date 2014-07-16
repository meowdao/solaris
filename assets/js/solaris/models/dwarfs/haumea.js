define([
    "require",
    "./dwarf"
],function (require, AbstractPlanet) {
    "use strict";

    var _ = require("underscore");

    var Haumea = function () {

    };

    Haumea.prototype = new AbstractPlanet();

    _.extend(Haumea.prototype, {
        _options: {
            body: {
                fillStyle: "#00ffff"
            }
        },
        _params: {
            name: "Haumea",
            index: 12 + 136108,
            mass: 0.00943,
            diameter: null,
            days: 103468,
            orbit: {
                aphelion: 7710,
                perihelion: 5194
            }
        }
    });

    return new Haumea();
});
