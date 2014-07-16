"use strict";

var Q = require("q");

var methods = {
    list: function () {
        return Q({
            url: "/view/system",
            messages: []
        });
    },
    any: function view () {
        return {};
    }
};

module.exports = methods;