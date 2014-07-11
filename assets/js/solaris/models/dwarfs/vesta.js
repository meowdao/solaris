define(function (require) {
    "use strict";

    var AbstractPlanet = require("./dwarf");
    var _ = require("underscore");

    var Vesta = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Vesta.prototype = new AbstractPlanet();

    _.extend(Vesta.prototype, {
        _optionsDefault: {
            body: {
                color: "#ffff00"
            }
        },
        _params: {
            name: "Vesta",
            index: 12 + 4,
            mass: 0.000259,
            diameter: 950,
            days: 1325.85,
            orbit: {
                aphelion: 384.72,
                perihelion: 321.82
            }
        }
    });

    return Vesta;
});
