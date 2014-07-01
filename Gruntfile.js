module.exports = function (grunt) {

    "use strict";

    var gzip = require("gzip-js");

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            dist: {
                src: [
                    "assets/js/*.js"
                ],
                options: {
                    jshintrc: "assets/js/.jshintrc"
                }
            },
            test: {
                src: [ "test/unit/*.js" ],
                options: {
                    jshintrc: "test/.jshintrc"
                }
            },
            other: {
                src: [
                    "Gruntfile.js",
                    "configs/*",
                    "controllers/*",
                    "utils/*"                ],
                options: {
                    jshintrc: ".jshintrc"
                }
            }
        },
        sass: {
            dist: {
                options: {
                    //sourcemap: true
                    bundleExec: true,
                    style: "compressed"
                },
                files: {
                    "dist/css/common.min.css": "assets/css/common.scss",
                    "dist/css/styles.min.css": "assets/css/styles.scss",
                    "dist/css/normalize.min.css": "assets/vendors/normalize.css/normalize.css"
                }
            },
            dev: {
                options: {
                    lineNumbers: true,
                    bundleExec: true,
                    style: "expanded"
                },
                files: {
                    "dist/css/common.min.css": "assets/css/common.scss",
                    "dist/css/styles.min.css": "assets/css/styles.scss",
                    "dist/css/normalize.min.css": "assets/vendors/normalize.css/normalize.css"
                }
            }
        },
        watch: {
            style: {
                files: ["assets/css/*.scss"],
                tasks: ["sass"],
                options: {
                    nospawn: true,
                    debounceDelay: 500
                }
            },
            script: {
                files: ["assets/js/*.js"],
                tasks: ["build", "jshint"],
                options: {
                    nospawn: true,
                    debounceDelay: 500
                }
            }
        },
        copy: {
            images: {
                files: [
                    {
                        expand: true,
                        cwd: "assets/img/",
                        src: [
                            "*",
                            "*/**"
                        ],
                        dest: "dist/img/"
                    }
                ]
            },
            css: {
                files: [
                    {
                        expand: true,
                        cwd: "assets/css/",
                        src: [
                            "reset.css"
                        ],
                        dest: "dist/css/"
                    }
                ]
            }
        },
        requirejs: {
            compileApp: {
                options: {
                    baseUrl: "assets/js",
                    name: "solaris",
                    out: "dist/js/solaris.min.js",
                    optimize: "uglify2",
                    preserveLicenseComments: false,
                    generateSourceMaps: true,
                    paths: {
                        "jquery": "empty:",
                        "LoDash": "empty:"
                    }
                }
            },
            compileClient: {
                options: {
                    baseUrl: "assets/js/",
                    mainConfigFile: "assets/js/client.js",
                    name: "client",
                    out: "dist/js/client.min.js",
                    optimize: "uglify2",
                    preserveLicenseComments: false,
                    generateSourceMaps: true,
                    paths: {
                        "jquery": "empty:",
                        "jquery-UI": "empty:"
                    }
                }
            },
            compileRequirejs: {
                options: {
                    name: "dist/vendors/requirejs/require",
                    out: "dist/vendors/requirejs/require.min.js"
                }
            }
        },
        compare_size: {
            files: [
                "dist/js/app.min.js",
                "dist/js/client.min.js",
                "dist/css/styles.min.css"
            ],
            options: {
                compress: {
                    gz: function (contents) {
                        return gzip.zip(contents, {}).length;
                    }
                },
                cache: "dist/.sizecache.json"
            }
        },
        qunit: {
            all: ["test/index.html"]
        }
    });

    // Load grunt tasks from NPM packages
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-qunit");
    grunt.loadNpmTasks("grunt-compare-size");
    grunt.loadNpmTasks("grunt-contrib-requirejs");

    // Default task(s).
    grunt.registerTask("default", ["build", "jshint", "uglify", "sass", "copy", "compare_size"]);
    grunt.registerTask("travis", ["build", "jshint", "uglify", "sass", "compare_size"]);
    grunt.registerTask("test", ["qunit"]);

};