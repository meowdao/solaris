define(function (require) {
    "use strict";

    var AbstractPlanet = require("./planet");
    var _ = require("underscore");

    var Pluto = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
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

    return Pluto;
});
