require.config({
    map: {
        "backbone.config": {
            "backbone": "backbone"
        },
        "handlebars.config": {
            "handlebars": "handlebars"
        },
        "jquery.config": {
            "jquery": "jquery"
        },
        "underscore.config": {
            "underscore": "underscore"
        },
        "*": {
            "Backbone": "backbone.config",
            "handlebars": "handlebars.config",
            "jquery": "jquery.config",
            "underscore": "underscore.config"
        }
    },
    shim: {
        handlebars: {
            exports: "Handlebars"
        }
    },
    paths: {
        "backbone": "/vendors/backbone/backbone",
        "backbone.config": "/js/config/backbone.config",
        "handlebars": "/vendors/handlebars/handlebars.min",
        "handlebars.config": "/js/config/handlebars.config",
        "jquery": "/vendors/jquery/dist/jquery.min",
        "jquery.config": "/js/config/jquery.config",
        "jquery-ui": "/vendors/jquery-ui/ui",
        "solaris": "/js/solaris",
        "underscore": "/vendors/underscore/underscore",
        "underscore.config": "/js/config/underscore.config"
    }
});

require([
    "client/app"
], function () {
    "use strict";

    console.log("solaris");

});

