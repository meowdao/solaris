define(function (require) {
    "use strict";

    var AbstractPlanet = require("./dwarf");
    var _ = require("LoDash");

    var Pallas = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Pallas.prototype = new AbstractPlanet();

    _.extend(Pallas.prototype, {
        _optionsDefault: {
            color: "#ff0000"
        },
        _params: {
            name: "Pallas",
            index: 12 + 2,
            mass: 0.000211,
            diameter: null,
            days: 1685.87,
            orbit: {
                aphelion: 510.4,
                perihelion: 318.9
            }
        }
    });

    return Pallas;
});
