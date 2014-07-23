define([
    "backbone",
    "marionette",
    "handlebars"
], function (Backbone, Marionette, Handlebars) {
    "use strict";

    console.log(Handlebars.partials._welcome)

    return Backbone.Marionette.ItemView.extend({
        template: Handlebars.partials._welcome
    });

});
