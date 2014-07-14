define([
    "require",
    "./dwarf"
],function (require, AbstractPlanet) {
    "use strict";

    var _ = require("underscore");

    var Ceres = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Ceres.prototype = new AbstractPlanet();

    _.extend(Ceres.prototype, {
        _optionsDefault: {
            body: {
                color: "#ff00ff"
            }
        },
        _params: {
            name: "Ceres",
            index: 12 + 1,
            mass: 0.00943,
            diameter: 950,
            days: 1680.99,
            orbit: {
                aphelion: 445.3,
                perihelion: 382.5
            }
        }
    });

    return Ceres;
});
