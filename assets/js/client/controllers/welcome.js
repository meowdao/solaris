define([
    "backbone",
    "marionette",
    "../layouts/welcome",
    "../views/welcome"
], function (Backbone, Marionette, WelcomeLayout, WelcomeView) {
    "use strict";

    console.log("controllers/welcome");

    return Backbone.Marionette.Controller.extend({

        //layout: new WelcomeLayout(),

        initialize: function(options){
            console.log("WelcomeController:initialize");
            //this.layout.render();
        },

        welcome: function(){
            console.log("WelcomeController:welcome");
            //this.layout.article.show(new WelcomeView());
        }

    });

});