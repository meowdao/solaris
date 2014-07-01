"use strict";

var Q = require("q");

var EpmFile = require("./EpmFile.js");

var EpmCalculator = function () {
    return this.init.apply(this, Array.prototype.slice.call(arguments));
};

EpmCalculator.prototype = {

    planets: ["mercury", "venus", "earth_m", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto", "moon", "sun"],
    dwarves: ["ceres", "pallas", "vesta", "eris", "haumea", "makemake", "sedna"],
    dwarfNumbers: [1, 2, 4, 136199, 136108, 136472, 90377],

    tt_tdb: "tdb",
    libration: "moonlibr",

    all_files: [], // 20
    rho: 82.3005676343,

    init: function () {
        for (var i = 0; i < 11; i++) {
            this.all_files.push(new EpmFile(__dirname + "/../../data/quasar/011m/EPM/BIN/" + this.planets[i] + ".bin"));
        }

        for (var i = 0; i < 7; i++) {
            this.all_files.push(new EpmFile(__dirname + "/../../data/quasar/011m/EPD/BIN/" + this.dwarves[i] + ".bin"));
        }

        this.all_files.push(new EpmFile(__dirname + "/../../data/quasar/011m/TT-TDB/BIN/" + this.tt_tdb + ".bin"));
        this.all_files.push(new EpmFile(__dirname + "/../../data/quasar/011m/EPM/BIN/" + this.libration + ".bin"));
    },

    calcLibr: function (jd, jd_frac, pos, vel) {
        this.all_files[19].calcRawValues(jd, jd_frac, pos, vel);
    },

    calcTDB: function (jd, jd_frac) {
        var pos = [];
        var vel = [];

        this.all_files[18].calcRawValues(jd, jd_frac, pos, vel);

        return vel[0];
    },

    // Calculates barycentric coordinates and velocities of the following objects
    // 1 - Mercury, 2 - Venus  , 3 - Earth,  4 - Mars, 5 - Jupiter
    // 6 - Saturn,  7 - Uranus , 8 - Neptune, 9 - Pluto,
    // 10 - Moon, 11 - Sun, 12 - EMB
    // Input
    //    int pl_num      - number of object
    //    int jd          - Julian date (integral part) at which interpolation is wanted
    //    double dj       - Julian date (frac part)
    // Output
    //    pos      - object positions
    //    vel      - object velocities
    calcBarycentric: function (pl_num, jd, jd_frac, pos, vel) {
        var pos2 = [];
        var vel2 = [];
        var i;

        if (pl_num === 3) { // Earth_BC = EMB_BC - Moon_GC/rho
            this.all_files[2].calcRawValues(jd, jd_frac, pos, vel);
            this.all_files[9].calcRawValues(jd, jd_frac, pos2, vel2);

            for (i = 0; i < 3; i++) {
                pos[i] -= pos2[i] / this.rho;
                vel[i] -= vel2[i] / this.rho;
            }
        } else if (pl_num === 10) {  // Moon_BC = Earth_BC + Moon_GC
            this.all_files[2].calcRawValues(jd, jd_frac, pos, vel);
            this.all_files[9].calcRawValues(jd, jd_frac, pos2, vel2);

            for (i = 0; i < 3; i++) {
                pos[i] += pos2[i] * (this.rho - 1) / this.rho;
                vel[i] += vel2[i] * (this.rho - 1) / this.rho;
            }
        } else if (pl_num == 12) {
            this.all_files[2].calcRawValues(jd, jd_frac, pos, vel);
        } else if (pl_num < 12) {
            this.all_files[pl_num - 1].calcRawValues(jd, jd_frac, pos, vel);
        } else {
            throw new Error("invalid body number");
        }
    },

    calcWrt: function (pl_num, centr_num, jd, jd_frac, pos, vel) {
        if (pl_num === 10 && centr_num === 3) {
            this.all_files[9].calcRawValues(jd, jd_frac, pos, vel);
        }
        else if (pl_num === 3 && centr_num === 10) {
            this.all_files[9].calcRawValues(jd, jd_frac, pos, vel);
            for (var i = 0; i < 3; i++) {
                pos[i] = -pos[i];
                vel[i] = -vel[i];
            }
        }
        else {
            var pos1 = [];
            var vel1 = [];

            this.calcBarycentric(pl_num, jd, jd_frac, pos, vel);
            this.calcBarycentric(centr_num, jd, jd_frac, pos1, vel1);

            for (var i = 0; i < 3; i++) {
                pos[i] -= pos1[i];
                vel[i] -= vel1[i];
            }
        }
    },

    calcBarycentricDwarf: function (dnum, jd, jd_frac, pos, vel) {
        var index = this.dwarfNumbers.indexOf(dnum);

        if (index < 0) {
            throw new Error("number not found");
        }

        this.all_files[11 + index].calcRawValues(jd, jd_frac, pos, vel);
    },


    calcWrtDwarf: function (pl_num, centr_num, jd, jd_frac, pos, vel) {
        var pos1 = [];
        var vel1 = [];

        this.calcBarycentricDwarf(pl_num, jd, jd_frac, pos, vel);
        this.calcBarycentric(centr_num, jd, jd_frac, pos1, vel1);

        for (var i = 0; i < 3; i++) {
            pos[i] -= pos1[i];
            vel[i] -= vel1[i];
        }
    },

    close: function () {
        for (var i = 0; i < 20; i++) {
            this.all_files[i].close();
        }
    }
};

module.exports = EpmCalculator;
