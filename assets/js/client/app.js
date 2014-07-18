define([
    "backbone",
    "marionette",
    "./routes/main"
], function (Backbone, Marionette, Router) {
    "use strict";

    // http://backbonetutorials.com/organizing-backbone-using-modules/

    var App = new Backbone.Marionette.Application();

    App.addInitializer(function(){
        new Router();
    });

    App.addInitializer(function(){
        // https://blog.isotoma.com/2014/01/backbone-history-and-ie9/
        Backbone.history.start({pushState: true});
    });

    App.addInitializer(function(){
        // http://robdodson.me/blog/2012/05/21/exploring-the-backbone-router-and-history-api/
        // http://stackoverflow.com/questions/9328513/backbone-js-and-pushstate
        Backbone.$(document.body).on("click", "a[href]:not([data-bypass])", function (e) {
            if (new RegExp("^((f|ht)tps?:)?//" + location.host).test(this.href)) {
                e.preventDefault();
                Backbone.history.navigate(this.pathname, true);
            }
        });
    });

    return App;
});