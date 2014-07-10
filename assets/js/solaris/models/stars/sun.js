define(["require",
    "./star",
    "../planets/planet",
    //"../belts/belt",
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
], function (require) {
    "use strict";

    var AbstractStar = require("./star");
    var _ = require("underscore");

    var Sun = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Sun.prototype = new AbstractStar();

    _.extend(Sun.prototype, {
        _optionsDefault: {
            color: "#ffff00"
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

    return Sun;
});
