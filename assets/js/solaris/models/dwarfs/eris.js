define([
    "require",
    "./dwarf"
    // has satellite Dysnomia
],function (require, AbstractPlanet) {
    "use strict";

    var _ = require("underscore");

    var Ceres = function () {

    };

    Ceres.prototype = new AbstractPlanet();

    _.extend(Ceres.prototype, {
        _options: {
            body: {
                fillStyle: "#ffffff"
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

    return new Ceres();
});
