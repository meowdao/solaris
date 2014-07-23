define([
    "backbone",
    "marionette"
], function (Backbone, Marionette) {
    "use strict";

    return Backbone.Marionette.LayoutView.extend({
        template: JST["layouts/main"],
        el: "body",

        regions: {
            header: "header > wrapper",
            article: "article > wrapper",
            footer: "footer > wrapper"
        }
    });

});