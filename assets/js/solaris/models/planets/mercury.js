define(function (require) {
    "use strict";

    var AbstractPlanet = require("./planet");
    var _ = require("underscore");

    var Mercury = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Mercury.prototype = new AbstractPlanet();

    _.extend(Mercury.prototype, {
        _optionsDefault: {
            color: "#C0C0C0"
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

    return Mercury;
});
