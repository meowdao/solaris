"use strict";

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

        for (var j = 0; j < 7; j++) {
            this.all_files.push(new EpmFile(__dirname + "/../../data/quasar/011m/EPD/BIN/" + this.dwarves[j] + ".bin"));
        }

        this.all_files.push(new EpmFile(__dirname + "/../../data/quasar/011m/TT-TDB/BIN/" + this.tt_tdb + ".bin"));
        this.all_files.push(new EpmFile(__dirname + "/../../data/quasar/011m/EPM/BIN/" + this.libration + ".bin"));
    },

    calcLibr: function (jd, jd_frac) {
        return this.all_files[19].calcRawValues(jd, jd_frac);
    },

    calcBarycentric: function (pl_num, jd, jd_frac) {
        var data_pl, data_num;
        if (pl_num === 3) { // Earth_BC = EMB_BC - Moon_GC/rho
            data_pl = this.all_files[2].calcRawValues(jd, jd_frac);
            data_num = this.all_files[9].calcRawValues(jd, jd_frac);
            return data_pl.map(function (pl, i) {
                return data_pl[i] - data_num[i] / this.rho;
            }.bind(this));
        } else if (pl_num === 10) {  // Moon_BC = Earth_BC + Moon_GC
            data_pl = this.all_files[2].calcRawValues(jd, jd_frac);
            data_num = this.all_files[9].calcRawValues(jd, jd_frac);
            return data_pl.map(function (pl, i) {
                return data_pl[i] + data_num[i] * (this.rho - 1) / this.rho;
            }.bind(this));
        } else if (pl_num === 12) {
            return this.all_files[2].calcRawValues(jd, jd_frac);
        } else if (pl_num < 12) {
            return this.all_files[pl_num - 1].calcRawValues(jd, jd_frac);
        } else {
            throw new Error("invalid body number");
        }
    },

    calcWrt: function (pl_num, centr_num, jd, jd_frac) {
        if (pl_num === 10 && centr_num === 3) {
            return this.all_files[9].calcRawValues(jd, jd_frac);
        } else if (pl_num === 3 && centr_num === 10) {
            var data = this.all_files[9].calcRawValues(jd, jd_frac);
            return data.map(function (e) {
                return -e;
            });
        } else {
            var data_pl = this.calcBarycentric(pl_num, jd, jd_frac);
            var data_center = this.calcBarycentric(centr_num, jd, jd_frac);
            return data_pl.map(function (pl, i) {
                return data_pl[i] - data_center[i];
            });
        }
    },

    calcBarycentricDwarf: function (dnum, jd, jd_frac) {
        var index = this.dwarfNumbers.indexOf(dnum);

        if (index < 0) {
            throw new Error("number not found");
        }

        return this.all_files[11 + index].calcRawValues(jd, jd_frac);
    },

    calcWrtDwarf: function (pl_num, centr_num, jd, jd_frac) {
        var data_pl = this.calcBarycentricDwarf(pl_num, jd, jd_frac);
        var data_center = this.calcBarycentric(centr_num, jd, jd_frac);
        return data_pl.map(function (pl, i) {
            return data_pl[i] - data_center[i];
        });
    }
};

module.exports = EpmCalculator;
