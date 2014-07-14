define([
    "require",
    "./planet"
], function (require, AbstractPlanet) {
    "use strict";

    var _ = require("underscore");

    var Jupiter = function () {

    };

    Jupiter.prototype = new AbstractPlanet();

    _.extend(Jupiter.prototype, {
        _optionsDefault: {
            body: {
                color: "#ffffff"
            }
        },
        _params: {
            name: "Jupiter",
            index: 5,
            mass: 1898, //*10^24
            diameter: 142984, // km
            days: 4331,
            orbit: {
                aphelion: 816.6,
                perihelion: 740.5
            }
        }
    });

    return new Jupiter();
});
