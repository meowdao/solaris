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
        },
        "backbone.wreqr" : {
            deps: ["config/backbone"]
        },
        "backbone.babysitter" : {
            deps: ["config/backbone"]
        }
    },
    paths: {
        "backbone": "/vendors/backbone/backbone",
        "backbone.babysitter": "/vendors/backbone.babysitter/lib/backbone.babysitter.min",
        "backbone.wreqr": "/vendors/backbone.wreqr/lib/backbone.wreqr.min",
        "handlebars": "/vendors/handlebars/handlebars.min",
        "jquery": "/vendors/jquery/dist/jquery",
        "jquery-ui": "/vendors/jquery-ui/ui",
        "marionette": "/vendors/marionette/lib/core/backbone.marionette",
        "underscore": "/vendors/underscore/underscore"
    }
});

require([
    "backbone",
    "marionette",
    "config/main",
    "client/app",
    "templates"
], function (B, M, config, App) {
    "use strict";

    console.log(B, B.Marionette)

    App.start();
    console.log("solaris");

});

