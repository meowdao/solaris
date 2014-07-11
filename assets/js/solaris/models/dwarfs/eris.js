define(function (require) {
    "use strict";

    // has satellite Dysnomia

    var AbstractPlanet = require("./dwarf");
    var _ = require("underscore");

    var Ceres = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Ceres.prototype = new AbstractPlanet();

    _.extend(Ceres.prototype, {
        _optionsDefault: {
            body: {
                color: "#ffffff"
            }
        },
        _params: {
            name: "Eris",
            index: 12 + 136199,
            mass: 0.0167,
            diameter: null,
            days: 204624,
            orbit: {
                aphelion: 14602,
                perihelion: 5723
            }
        }
    });

    return Ceres;
});
