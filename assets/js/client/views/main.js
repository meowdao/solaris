define([
    "backbone",
    "marionette",
    "../../templates"
], function (Backbone, Marionette, templates) {
    "use strict";

    return Backbone.Marionette.ItemView.extend({
        template: templates["main"]
    });

});
