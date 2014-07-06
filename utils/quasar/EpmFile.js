"use strict";

var BufferedByteStream = require("./BufferedByteStream.js");

var EpmFile = function () {
    return this.init.apply(this, Array.prototype.slice.call(arguments));
};

EpmFile.prototype = {

    jd: null,            // initial Julian date (integer part)
    jd_frac: null,       // initial Julian date (fractional part)
    subinterval: null,
    num_coefficients: null,
    dimension: null,
    num_subintervals: null,

    buffer: null,

    init: function (filename) {
        this.buffer = new BufferedByteStream(filename);
        this.buffer.on("error", function () {
            console.log("error: " + filename);
        });
        this.buffer.on("ready", function () {
            console.log("ready: " + filename);
            this.jd = this.buffer.getInt(0);
            this.jd_frac = this.buffer.getDouble(4);
            this.subinterval = this.buffer.getDouble(12);
            this.num_coefficients = this.buffer.getInt(20);
            this.dimension = this.buffer.getInt(24);
            this.num_subintervals = this.buffer.getInt(28);
        }.bind(this));
    },

    calc_pos: function (ncoef, antiderivative, coef, delta) {
        var x = 0.0;
        for (var i = ncoef - 1; i >= 0; i--) {
            x += coef[i] * antiderivative[i];
        }
        x = 0.5 * delta * x + coef[ncoef];
        return x;
    },

    calc_vel: function (ncoef, polynomials, coef) {
        var v = 0.0;
        for (var i = ncoef - 1; i >= 0; i--) {
            v += coef[i] * polynomials[i];
        }
        return v;
    },

    // t is in the interval [-1 .. +1]
    calc_cheb_pol: function (ncoef, t, polynomials, antiderivatives) {
        var d;
        var i, j;
        var flag;

        polynomials[0] = 1.0;
        polynomials[1] = t;

        for (i = 2; i <= ncoef; i++) {
            polynomials[i] = 2.0 * polynomials[i - 1] * t - polynomials[i - 2];
        }

        antiderivatives[0] = t;
        antiderivatives[1] = (polynomials[2] + polynomials[0]) * 0.25;
        for (i = 2; i < ncoef; i++) {
            antiderivatives[i] = 0.5 * (polynomials[i + 1] / (i + 1) - polynomials[i - 1] / (i - 1));
        }

        // Eliminate constant terms
        flag = false;
        d = 2.0 * t;

        for (i = 3, j = 1; i < ncoef; i += 2, j++) {
            d = 0.25 / j + 0.25 / (j + 1);
            flag = !flag;
            if (flag) {
                d = -d;
            }
            antiderivatives[i] += d;
        }
    },

    calcRawValues: function (jd, jd_frac) {
        var polynomials = [];
        var antiderivatives = [];

        var diff_int = jd - this.jd;
        var diff = (diff_int + (jd_frac - this.jd_frac)) / this.subinterval;
        var i_subinterval = Math.floor(diff);
        var t = 2.0 * (diff - i_subinterval) - 1.0;

        if (i_subinterval < 0 || i_subinterval >= this.num_subintervals) {
            throw new Error("date not within the range of the theory");
        }

        this.calc_cheb_pol(this.num_coefficients - 1, t, polynomials, antiderivatives);

        return Array.apply(null, new Array(this.dimension)).map(function (e, j) {
            var array = Array.apply(null, new Array(this.num_coefficients)).map(function (e, i) {
                return this.buffer.getDouble(32 + i_subinterval * this.dimension * 8 * this.num_coefficients + j * 8 * this.num_coefficients + i * 8);
            }.bind(this));
            return this.calc_pos(this.num_coefficients - 1, antiderivatives, array, this.subinterval);
        }.bind(this));
    }
};

module.exports = EpmFile;