"use strict";

var _ = require("underscore");

exports.requiresParams = function (required) {
    return function (request, response, next) {
        var query = request.method === "POST" || request.method === "PUT" ? request.body : request.query,
            check = _.every(required, function (e) {
                return !!query[e];
            });
        if (!check) {
            var error = new Error("Required parameter not found");
            error.status = 400;
            return next(error);
        }
        return next();
    };
};
