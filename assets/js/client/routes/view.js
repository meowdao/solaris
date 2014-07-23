define([
    "backbone",
    "marionette",
    "../controllers/view"
], function (Backbone, Marionette, ViewController) {
    "use strict";

    console.log("routes/view")

    return Backbone.Marionette.AppRouter.extend({
        controller: new ViewController(),
        appRoutes: {
            "view/system": "view",
            "*": "view"
        }
    });

});