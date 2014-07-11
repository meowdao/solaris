define(function (require) {
    "use strict";

    var AbstractPlanet = require("./planet");
    var _ = require("underscore");

    var Saturn = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Saturn.prototype = new AbstractPlanet();

    _.extend(Saturn.prototype, {
        _optionsDefault: {
            body: {
                color: "#ffffff"
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

    return Saturn;
});
