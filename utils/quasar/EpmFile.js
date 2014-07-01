"use strict";

var fs = require("fs");

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
    stream: null,

    position: 0,

    getInt: function () {
        var buffer = new Buffer(4);
        fs.readSync(this.fd, buffer, 0, buffer.length, this.position);
        this.position += buffer.length;
        return buffer.readInt32LE(0);
    },

    getDouble: function () {
        var buffer = new Buffer(8);
        fs.readSync(this.fd, buffer, 0, buffer.length, this.position);
        this.position += buffer.length;
        return buffer.readDoubleLE(0);
    },

    init: function (filename) {
        this.fd = fs.openSync(filename, "r");

        this.position = 0;

        this.jd = this.getInt();
        this.jd_frac = this.getDouble();
        this.subinterval = this.getDouble();
        this.num_coefficients = this.getInt();
        this.dimension = this.getInt();
        this.num_subintervals = this.getInt();

        if (this.dimension !== 3 && this.dimension !== 1) {
            throw new Exception("bad EPM dimension");
        }
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

    calcRawValues: function (jd, jd_frac, pos, vel) {
        var coefs = [];
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

        for (var i = 0; i < this.dimension; i++) {
            var offset = 32 + i_subinterval * this.dimension * 8 * this.num_coefficients + i * 8 * this.num_coefficients;

            this.position = offset;

            for (var j = 0; j < this.num_coefficients; j++) {
                coefs[j] = this.getDouble();
            }

            pos[i] = this.calc_pos(this.num_coefficients - 1, antiderivatives, coefs, this.subinterval);
            vel[i] = this.calc_vel(this.num_coefficients - 1, polynomials, coefs);
        }
    },
    close: function () {
        fs.closeSync(this.fd);
    }
};

module.exports = EpmFile;