define(function (require) {
    "use strict";

    var AbstractPlanet = require("./planet");
    var _ = require("underscore");

    var Neptune = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Neptune.prototype = new AbstractPlanet();

    _.extend(Neptune.prototype, {
        _optionsDefault: {
            color: "#ffffff"
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

    return Neptune;
});
