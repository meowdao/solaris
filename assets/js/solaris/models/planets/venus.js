define(function (require) {
    "use strict";

    var AbstractPlanet = require("./planet");

    var Venus = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Venus.prototype = new AbstractPlanet();

    _.extend(Venus.prototype, {
        _optionsDefault: {
            color: "#ffc0cb"
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
