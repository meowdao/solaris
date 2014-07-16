define([
    "require",
    "./planet"
], function (require, AbstractPlanet) {
    "use strict";

    var _ = require("underscore");

    var Mercury = function () {

    };

    Mercury.prototype = new AbstractPlanet();

    _.extend(Mercury.prototype, {
        _options: {
            body: {
                color: "#C0C0C0"
            }
        },
        _params: {
            name: "Mercury",
            index: 1,
            mass: 0.33, //*10^24
            diameter: 4879, // km
            days: 88,
            orbit: {
                aphelion: 69.8,
                perihelion: 46.0
            }
        }
    });

    return new Mercury();
});
