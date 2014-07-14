define([
    "require",
    "./planet"
], function (require, AbstractPlanet) {
    "use strict";

    var _ = require("underscore");

    var Neptune = function () {

    };

    Neptune.prototype = new AbstractPlanet();

    _.extend(Neptune.prototype, {
        _optionsDefault: {
            body: {
                color: "#ffffff"
            }
        },
        _params: {
            name: "Neptune",
            index: 8,
            mass: 102.0, //*10^24
            diameter: 49528, // km
            days: 60190.3,
            orbit: {
                aphelion: 4545.7,
                perihelion: 4444.5
            }
        }
    });

    return new Neptune();
});
