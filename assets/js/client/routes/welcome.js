define([
    "backbone",
    "marionette",
    "../controllers/welcome"
], function (Backbone, Marionette, WelcomeController) {
    "use strict";

    console.log("routes/welcome")

    return Backbone.Marionette.AppRouter.extend({
        "": function(){
            console.log("WelcomeRouter:''")
        }
    });

});