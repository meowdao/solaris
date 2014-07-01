"use strict";


function mod (a, b) {
    return a - (b * Math.floor(a / b));
}

function leap_gregorian(year) {
    return ((year % 4) == 0) && (!(((year % 100) == 0) && ((year % 400) != 0)));
}

var Calendar = {
    GREGORIAN_EPOCH: 1721425.5,
    leap_gregorian: function (year) {
        return ((year % 4) == 0) && (!(((year % 100) == 0) && ((year % 400) != 0)));
    },
    gregorian_to_jd: function (year, month, day) {
        return (this.GREGORIAN_EPOCH - 1) +
            (365 * (year - 1)) +
            Math.floor((year - 1) / 4) +
            (-Math.floor((year - 1) / 100)) +
            Math.floor((year - 1) / 400) +
            Math.floor((((367 * month) - 362) / 12) + ((month <= 2) ? 0 : (leap_gregorian(year) ? -1 : -2)) + day);
    },
    jd_to_gregorian: function (jd) {
        var wjd, depoch, quadricent, dqc, cent, dcent, quad, dquad,
            yindex, year, yearday, leapadj, month, day;

        wjd = Math.floor(jd - 0.5) + 0.5;
        depoch = wjd - this.GREGORIAN_EPOCH;
        quadricent = Math.floor(depoch / 146097);
        dqc = mod(depoch, 146097);
        cent = Math.floor(dqc / 36524);
        dcent = mod(dqc, 36524);
        quad = Math.floor(dcent / 1461);
        dquad = mod(dcent, 1461);
        yindex = Math.floor(dquad / 365);
        year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;
        if (!((cent == 4) || (yindex == 4))) {
            year++;
        }
        yearday = wjd - gregorian_to_jd(year, 1, 1);
        leapadj = ((wjd < gregorian_to_jd(year, 3, 1)) ? 0 : (leap_gregorian(year) ? 1 : 2) );
        month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);
        day = (wjd - gregorian_to_jd(year, month, 1)) + 1;

        return [year, month, day];
    }
};

module.exports = Calendar;



