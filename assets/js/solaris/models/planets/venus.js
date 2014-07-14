define([
    "require",
    "./planet"
], function (require, AbstractPlanet) {
    "use strict";

    var _ = require("underscore");

    var Venus = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Venus.prototype = new AbstractPlanet();

    _.extend(Venus.prototype, {
        _optionsDefault: {
            body: {
                color: "#ffc0cb"
            }
        },
        _params: {
            name: "Venus",
            index: 2,
            mass: 4.87, //*10^24
            diameter: 12104, // km
            days: 224.7,
            orbit: {
                aphelion: 108.9,
                perihelion: 107.5
            }
        }
    });

    return Venus;
});
