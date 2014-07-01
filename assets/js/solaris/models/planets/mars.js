define(function (require) {
    "use strict";

    var AbstractPlanet = require("./planet");

    var Mars = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Mars.prototype = new AbstractPlanet();

    _.extend(Mars.prototype, {
        _optionsDefault: {
            color: "#ff0000"
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

    return Mars;
});
