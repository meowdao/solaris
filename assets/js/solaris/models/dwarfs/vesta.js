define([
    "require",
    "./dwarf"
],function (require, AbstractPlanet) {
    "use strict";

    var _ = require("underscore");

    var Vesta = function () {

    };

    Vesta.prototype = new AbstractPlanet();

    _.extend(Vesta.prototype, {
        _options: {
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

    return new Vesta();
});
