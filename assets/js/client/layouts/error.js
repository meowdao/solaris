define([
    "backbone",
    "marionette"
], function (Backbone, Marionette) {
    "use strict";

    return Backbone.Marionette.LayoutView.extend({
        template: JST.error,
        el: ".container",

        regions: {
            text: ".description"
        }
    });

});
