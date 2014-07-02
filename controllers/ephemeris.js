"use strict";

var Q = require("q");
var EpmCalculator = require("../utils/quasar/EpmCalculator.js");
var calendar = require("../utils/calendar.js");

var epmc = new EpmCalculator();

var methods = {
    getObject: function (query) {
        var date = query.date.split("-");
        var jd = ~~calendar.gregorian_to_jd(~~date[0], ~~date[1], ~~date[2]);
        var xv = [];
        var vv = [];
        if (query.object <= 12) {
            epmc.calcWrt(query.object, query.center, jd, 0.5, xv, vv);
        } else {
            epmc.calcWrtDwarf(query.object - 12, query.center, jd, 0.5, xv, vv);
        }
        return Q({xv: xv, vv: vv});
    },
    getObjectOrbit: function (query) {
        var date = query.date.split("-");
        var jd = ~~calendar.gregorian_to_jd(~~date[0], ~~date[1], ~~date[2]);
        var step = ~~query.step || 1;
        for (var i = 0, j = query.days, array = [], xv = [], vv = []; i < j; i += step, xv = [], vv = []) {
            if (query.object <= 12) {
                epmc.calcWrt(query.object, query.center, jd - i, 0.5, xv, vv);
                array.push({xv: xv, vv: vv})
            } else {
                epmc.calcWrtDwarf(query.object - 12, query.center, jd - i, 0.5, xv, vv);
                array.push({xv: xv, vv: vv})
            }
        }
        return Q(array)
    }
};

module.exports = methods;