require.config({
    map: {
        "jquery.config": {
            "jquery": "jquery"
        },
        "*": {
            "jquery": "jquery.config"
        }
    },
    paths: {
        "solaris": "/js/solaris",
        "LoDash": "/vendors/lodash/dist/lodash",
        "jquery": "/vendors/jquery/dist/jquery.min",
        "jquery.config": "/js/config/jquery.config"
    }
});

require([
    "solaris/core"
], function (Solaris) {
    "use strict";

    var app = new Solaris(document.getElementById("solaris"), {
        center: 11,
        scale: 35
    });
    app.loadView("void");
    app.loadView("grid");
    //app.loadView("system", {sub: {sun: {sub: {earth: {sub: {moon: {}}}}}}});
    /*app.loadView("hypotrochoid", {sub: {
        sun: {sub: {
            venus: {orbit: {step:5, days:3000}},
            earth: {orbit: {step:5, days:3000}},
        }}
    }});*/
/**/
    // planets, dwarfs and satellites
    app.loadView("system", {
        stars: {
            sun: {
                planets: {
                    mercury: {orbit: true},
                    venus: {orbit: true},
                    earth: {
                        orbit: true,
                        satellites: {
                            moon: {orbit: true}
                        }
                    },
                    mars: {orbit: true},
                    jupiter: {orbit: true},
                    saturn: {orbit: true},
                    uranus: {orbit: true},
                    neptune: {orbit: true},
                    pluto: {orbit: true},
                },
                dwarfs: {
                    ceres: {orbit: true},
                    pallas: {orbit: true},
                    vesta: {orbit: true},
                    sedna: {orbit: true},
                    haumea: {orbit: true},
                    makemake: {orbit: true},
                    eris: {orbit: true},
                }
            }
        }
    });
/**/

/*
    // planets only
    app.loadView("system", {
        stars: {
            sun: {
                planets: {
                    mercury: {orbit: true},
                    venus: {orbit: true},
                    earth: {orbit: true},
                    mars: {orbit: true},
                    jupiter: {orbit: true},
                    saturn: {orbit: true},
                    uranus: {orbit: true},
                }
            }
        }
    });
*/
/*
    // dwarfs only
    app.loadView("system", {
        stars: {
            sun: {
                dwarfs: {
                    ceres: {orbit: true},
                    pallas: {orbit: true},
                    vesta: {orbit: true},
                    sedna: {orbit: true},
                    haumea: {orbit: true},
                    makemake: {orbit: true},
                    eris: {orbit: true}
                }
            }
        }
    });
*/
/*
    app.loadView("system", {
        planets: {
            earth: {
                label: true,
                satellites: {
                    moon: {
                        label: {
                            color: "blue"
                        },
                        orbit: {
                            color: "red"
                        }
                    }
                }
            }
        }
    });
*/
    console.log("APP");
});

