define(function (require) {
    "use strict";

    var AbstractPlanet = require("./planet");
    var _ = require("underscore");

    var Uranus = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Uranus.prototype = new AbstractPlanet();

    _.extend(Uranus.prototype, {
        _optionsDefault: {
            body: {
                color: "#ffffff"
            }
        },
        _params: {
            name: "Uranus",
            index: 7,
            mass: 86.8, //*10^24
            diameter: 51118, // km
            days: 30589,
            orbit: {
                aphelion: 3003.6,
                perihelion: 2741.3
            }
        }
    });

    return Uranus;
});
