define([
    "backbone",
    "marionette",
    "../controllers/error"
], function (Backbone, Marionette, ErrorController) {
    "use strict";

    return Backbone.Marionette.AppRouter.extend({
        controller: new ErrorController(),
        appRoutes: {
            "*path": "error"
        }
    });

});