define(["require",
    "../satellites/moon"
], function (require) {
    "use strict";

    var AbstractPlanet = require("./planet");
    var _ = require("underscore");

    var Earth = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Earth.prototype = new AbstractPlanet();

    _.extend(Earth.prototype, {
        _optionsDefault: {
            color: "#0000ff"
        },
        _params: {
            name: "Earth",
            index: 3,
            mass: 5.97, //*10^24
            diameter: 12756, // km
            days: 365.2,
            orbit: {
                aphelion: 152.1,
                perihelion: 147.1
            }
        }
    });

    return Earth;
});
