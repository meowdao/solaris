define([
    "backbone",
    "marionette"
], function (Backbone, Marionette) {
    "use strict";

    return Backbone.Marionette.LayoutView.extend({
        template: JST["welcome"],
        el: "article > wrapper",

        regions: {
            text: ".jumbotron"
        }
    });

});
