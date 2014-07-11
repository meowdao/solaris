define(function (require) {
    "use strict";

    var AbstractPlanet = require("./dwarf");
    var _ = require("underscore");

    var Haumea = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Haumea.prototype = new AbstractPlanet();

    _.extend(Haumea.prototype, {
        _optionsDefault: {
            body: {
                color: "#00ffff"
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

    return Haumea;
});
