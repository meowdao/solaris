define(function () {
    "use strict";

    return {

        // private
        _isType: function (variable, type) {
            return Object.prototype.toString.call(variable) === "[object " + type + "]";
        },

        getRandomColor: function () {
            return "#" + (~~(Math.random() * 255)).toString(16) + (~~(Math.random() * 255)).toString(16) + (~~(Math.random() * 255)).toString(16);
        },


        noop: function () {
        }

    };

});