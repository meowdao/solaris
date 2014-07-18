require.config({
    map: {
        "config": {
            "backbone": "backbone",
            "handlebars": "handlebars",
            "jquery": "jquery",
            "marionette": "marionette",
            "underscore": "underscore"
        },
        "*": {
            "backbone": "config/backbone",
            "handlebars": "config/handlebars",
            "jquery": "config/jquery",
            "marionette": "config/marionette",
            "underscore": "config/underscore"
        }
    },
    shim: {
        handlebars: {
            exports: "Handlebars"
        }
    },
    paths: {
        "backbone": "/vendors/backbone/backbone",
        "handlebars": "/vendors/handlebars/handlebars.min",
        "jquery": "/vendors/jquery/dist/jquery",
        "jquery-ui": "/vendors/jquery-ui/ui",
        "marionette": "/vendors/marionette/lib/backbone.marionette",
        "underscore": "/vendors/underscore/underscore"
    }
});

require([
    "config/main",
    "client/app"
], function (config, App) {
    "use strict";

    App.start();
    console.log("solaris");

});

