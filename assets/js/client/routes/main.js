define([
    "backbone",
    "marionette",
    "../routes/welcome",
    "../routes/error",
    "../routes/view"
], function (Backbone, Marionette, WelcomeRouter, ErrorRouter, ViewRouter) {
    "use strict";

    console.log("routes/main")

    return Backbone.Marionette.AppRouter.extend({
        routes: {
            "": function(){
                console.log("MainRouter:''")
                new WelcomeRouter("");
            },
            "view": function(){
                new ViewRouter("view/");
            },
            "*path": function(){
                new ErrorRouter("");
            }
        }
    });

});