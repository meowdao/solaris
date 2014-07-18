define(["handlebars"], function (handlebars) {
    "use strict";

    handlebars.registerHelper("log", function () {
        console.log(arguments);
    });

    handlebars.registerHelper("toJSON", function () {
        return new handlebars.SafeString("<pre>" + JSON.stringify([].slice.call(arguments, 0, -1), null, "\t") + "</pre>");
    });

    return handlebars;
});