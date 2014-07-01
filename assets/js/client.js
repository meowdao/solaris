require.config({
    /*shim: {
        "jQuery": {
            exports: "jQuery"
        }
    },*/

    paths: {
        "jquery": "/vendors/jquery/dist/jquery.min",
        "jquery-UI": "/vendors/jquery-ui/ui"
    }
});

require([
        "jquery"
    ],
    function () {
        "use strict";


        console.log("client");
    });
