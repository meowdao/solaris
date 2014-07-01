define(function (require) {
    "use strict";

    var _ = require("LoDash");
    var $ = require("jquery");

    // abstract class
    var Label = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Label.prototype = {
        _context: null,
        _options: {},
        _optionsDefault: {
            color: "#ffffff"
        },
        init: function (options) {
            //console.log("Label:init", options, this._options)
            this._options = _.extend({}, this._optionsDefault, options);
        }
    };

    return Label;
});
