define([
    "backbone",
    "marionette",
    "../layouts/error",
    "../views/error"
], function (Backbone, Marionette, ErrorLayout, ErrorView) {
    "use strict";

    console.log("controller error");

    return Backbone.Marionette.Controller.extend({

        //layout: new ErrorLayout(),

        initialize: function () {
            console.log("ErrorController:initialize");
            //this.layout.render();
        },

        error: function () {
            console.log("ERROR")
            //this.layout.text.show(new ErrorView({})); // {error: {status: 404, message: "Page Not Found!"}}
        }

    });

});