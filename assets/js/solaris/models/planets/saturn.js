define([
    "require",
    "./planet"
], function (require, AbstractPlanet) {
    "use strict";

    var _ = require("underscore");

    var Saturn = function () {

    };

    Saturn.prototype = new AbstractPlanet();

    _.extend(Saturn.prototype, {
        _options: {
            body: {
                fillStyle: "#ffffff"
            }
        },
        _params: {
            name: "Saturn",
            index: 6,
            mass: 568, //*10^24
            diameter: 120536, // km
            days: 10747,
            orbit: {
                aphelion: 1514.5,
                perihelion: 1352.6
            }
        }
    });

    return new Saturn();
});
