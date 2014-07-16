define([
    "require",
    "./satellite"
],function (require, AbstractPlanet) {
    "use strict";

    var _ = require("underscore");

    var Moon = function () {

    };

    Moon.prototype = new AbstractPlanet();

    _.extend(Moon.prototype, {
        _options: {
            body: {
                fillStyle: "#00ff00"
            }
        },
        _params: {
            name: "Moon",
            index: 10,
            mass: 0.073,
            diameter: 3475,
            days: 27.3,
            orbit: {
                aphelion: 0.406,
                perihelion: 0.363
            }
        }
    });

    return new Moon();
});
