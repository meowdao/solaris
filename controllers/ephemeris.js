"use strict";

var Q = require("q");
var EpmCalculator = require("../utils/quasar/EpmCalculator.js");
var calendar = require("../utils/calendar.js");

var epmc = new EpmCalculator();

var methods = {
    getObject: function (query) {
        var date = query.date.split("-");
        var jd = ~~calendar.gregorian_to_jd(~~date[0], ~~date[1], ~~date[2]);
        if (query.object <= 12) {
            return Q(epmc.calcWrt(query.object, query.center, jd, 0.5));
        } else {
            return Q(epmc.calcWrtDwarf(query.object - 12, query.center, jd, 0.5));
        }
    },
    getObjectOrbit: function (query) {
        var date = query.date.split("-");
        var jd = ~~calendar.gregorian_to_jd(~~date[0], ~~date[1], ~~date[2]);

        var i = 0,
            j = ~~query.days,
            step = ~~query.step || 1,
            array = [];
        if (query.object <= 12) {
            for (; i < j; i += step) {
                array.push(epmc.calcWrt(query.object, query.center, jd - i, 0.5));
            }
        } else {
            for (; i < j; i += step) {
                array.push(epmc.calcWrtDwarf(query.object - 12, query.center, jd - i, 0.5));
            }
        }
        return Q(array);
    }
};

module.exports = methods;