define([
    "require",
    "./planet"
], function (require, AbstractPlanet) {
    "use strict";

    var _ = require("underscore");

    var Mars = function () {

    };

    Mars.prototype = new AbstractPlanet();

    _.extend(Mars.prototype, {
        _options: {
            body: {
                fillStyle: "#ff0000"
            }
        },
        _params: {
            name: "Mars",
            index: 4,
            mass: 0.642, //*10^24
            diameter: 6792, // km
            days: 687.0,
            orbit: {
                aphelion: 249.2,
                perihelion: 206.6
            }
        }
    });

    return new Mars();
});
