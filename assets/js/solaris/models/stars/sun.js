define([
    "require",
    "./star",
    // planets
    "../planets/mercury",
    "../planets/venus",
    "../planets/earth",
    "../planets/mars",
    "../planets/jupiter",
    "../planets/saturn",
    "../planets/uranus",
    "../planets/neptune",
    "../planets/pluto",
    // dwarfs
    "../dwarfs/ceres",
    "../dwarfs/pallas",
    "../dwarfs/vesta",
    "../dwarfs/sedna",
    "../dwarfs/haumea",
    "../dwarfs/eris",
    "../dwarfs/makemake"
], function (require, AbstractStar) {
    "use strict";

    var _ = require("underscore");

    var Sun = function () {

    };

    Sun.prototype = new AbstractStar();

    _.extend(Sun.prototype, {
        _options: {
            body: {
                fillStyle: "#ffff00"
            }
        },
        _params: {
            name: "Sun",
            index: 11,
            orbit: {
                aphelion: 0,
                perihelion: 0
            }
        }
    });

    return new Sun();
});
