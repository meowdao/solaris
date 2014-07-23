define([
    "backbone",
    "marionette"
], function (Backbone, Marionette) {
    "use strict";

    console.log("controllers/view");

    return Backbone.Marionette.Controller.extend({

        initialize: function(){
            console.log("ViewController:initialize");
        },

        view: function(){
            console.log("ViewController:view");
        }

    });

});