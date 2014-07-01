define(function () {
    "use strict";

    return {

        // private
        _isType: function (variable, type) {
            return Object.prototype.toString.call(variable) === "[object " + type + "]";
        },


        noop: function () {
        }

    };

});