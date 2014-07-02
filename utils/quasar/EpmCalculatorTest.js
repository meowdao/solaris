"use strict";

var EpmCalculator = require("./EpmCalculator.js");

var EpmCalculatorTest = function () {
    return this.init.apply(this, Array.prototype.slice.call(arguments));
};

EpmCalculatorTest.prototype = {

    init: function () {

        var epmc = new EpmCalculator();

        var jd = 2443144;
        var jd_frac = 0.5003725;
        var xv = [];
        var vv = [];
        var pl_num;

        for (var centr_num = 1; centr_num <= 12; centr_num++) {
            console.log("Coordinates w.r.t. body #%d\n", centr_num);
            for (pl_num = 1; pl_num <= 12; pl_num++) {
                epmc.calcWrt(pl_num, centr_num, jd, jd_frac, xv, vv);
                console.log("%d\n", pl_num);
                console.log(xv[0], xv[1], xv[2]);
                console.log(vv[0], vv[1], vv[2]);
            }
        }
        console.log("Barycentric coordinates\n");
        for (pl_num = 1; pl_num <= 12; pl_num++) {
            epmc.calcBarycentric(pl_num, jd, jd_frac, xv, vv);
            console.log("%d\n", pl_num);
            console.log(xv[0], xv[1], xv[2]);
            console.log(vv[0], vv[1], vv[2]);
        }

        for (var i = 0; i < EpmCalculator.prototype.dwarfNumbers.length; i++) {
            console.log("dwarf %d\n", EpmCalculator.prototype.dwarfNumbers[i]);
            epmc.calcBarycentricDwarf(EpmCalculator.prototype.dwarfNumbers[i], jd, jd_frac, xv, vv);
            console.log(xv[0], xv[1], xv[2]);
            console.log(vv[0], vv[1], vv[2]);
        }

        var tt_minus_tdb = epmc.calcTDB(jd, jd_frac);

        console.log("TT-TDB = %22.12f\n", tt_minus_tdb);

        epmc.calcLibr(jd, jd_frac, xv, vv);
        console.log("Lunar libration angles:\n");
        console.log(xv[0], xv[1], xv[2]);
        console.log(vv[0], vv[1], vv[2]);

        epmc.close();

    }
};

module.exports = EpmCalculatorTest;