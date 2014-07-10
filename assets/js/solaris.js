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
            "backbone": "backbone.config",
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
    "jquery",
    "backbone",
    "client/routes/main",
    "templates"
], function ($, backbone, Routes) {
    "use strict";

    // http://robdodson.me/blog/2012/05/21/exploring-the-backbone-router-and-history-api/
    // http://stackoverflow.com/questions/9328513/backbone-js-and-pushstate
    $(document.body).on("click", "a[href]:not([data-bypass])", function (e) {
        if (new RegExp("^((f|ht)tps?:)?//" + location.host).test(this.href)) {
            e.preventDefault();
            backbone.history.navigate(this.pathname, true);
        }
    });

    new Routes();

    // // https://blog.isotoma.com/2014/01/backbone-history-and-ie9/
    backbone.history.start({pushState: true});
    console.log("APP");
});

