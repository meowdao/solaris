define([
    "require",
    "./planet"
], function (require, AbstractPlanet) {
    "use strict";

    var _ = require("underscore");

    var Pluto = function () {

    };

    Pluto.prototype = new AbstractPlanet();

    _.extend(Pluto.prototype, {
        _optionsDefault: {
            body: {
                color: "#ffffff"
            }
        },
        _params: {
            name: "Pluto",
            index: 9,
            mass: 0.0131,
            diameter: 2390,
            days: 90588,
            orbit: {
                aphelion: 7304.3,
                perihelion: 4435.0
            }
        }
    });

    return new Pluto();
});
