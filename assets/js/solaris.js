require.config({
    map: {
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
        "ember": "/vendors/ember/ember",
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

