define([
    "backbone",
    "marionette",
    "../layouts/main",
    "../routes/welcome",
    "../routes/error",
    "../routes/view"
], function (Backbone, Marionette, MainLayout, WelcomeRouter, ErrorRouter, ViewRouter) {
    "use strict";

    console.log("controllers/main");

    return Backbone.Marionette.Controller.extend({

        layout: new MainLayout(),

        initialize: function () {
            console.log("MainController:initialize");
            this.layout.render();
        },

        welcome: function(){
            console.log("MainController:welcome")
            new WelcomeRouter("");
        },

        error: function(){
            console.log("MainController:error")
            //new ErrorRouter("");
        },

        view: function(){
            console.log("MainController:view")
            //new ViewRouter("view/");
        }

    });

});