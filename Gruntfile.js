module.exports = function (grunt) {

    "use strict";

    var gzip = require("gzip-js");

    // Project configuration.
    grunt.initConfig({
        jshint: {
            dist: {
                src: [
                    "assets/js/**/*.js"
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
                    "utils/*"
                ],
                options: {
                    jshintrc: ".jshintrc"
                }
            }
        },
        less: {
            production: {
                options: {
                    paths: ["assets/css"],
                    compress: true
                },
                files: {
                    "dist/css/common.min.css": "assets/css/common.less",
                    "dist/css/styles.min.css": "assets/css/styles.less",
                    "dist/css/bootstrap.min.css": "dist/vendors/bootstrap/less/bootstrap.less"
                }
            },
            development: {
                options: {
                    paths: ["assets/css"],
                    compress: false
                },
                files: {
                    "dist/css/common.min.css": "assets/css/common.less",
                    "dist/css/styles.min.css": "assets/css/styles.less",
                    "dist/css/bootstrap.min.css": "dist/vendors/bootstrap/less/bootstrap.less"
                }
            }
        },
        watch: {
            style: {
                files: ["assets/css/*.less"],
                tasks: ["less"],
                options: {
                    nospawn: true,
                    debounceDelay: 500
                }
            },
            script: {
                files: ["assets/js/*.js"],
                tasks: ["jshint", "requirejs:compileApp"],
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
            app: {
                options: {
                    baseUrl: "assets/js",
                    name: "solaris",
                    out: "dist/js/solaris.min.js",
                    optimize: "uglify2",
                    preserveLicenseComments: false,
                    generateSourceMaps: true,
                    paths: {
                        "backbone": "empty:",
                        "handlebars": "empty:",
                        "jquery": "empty:",
                        "marionette": "empty:",
                        "underscore": "empty:"
                    }
                }
            },
            requirejs: {
                options: {
                    name: "dist/vendors/requirejs/require",
                    out: "dist/vendors/requirejs/require.min.js"
                }
            }
        },
        handlebars: {
            templates: {
                options: {
                    amd: true,
                    partialRegex: /.*/,
                    partialsPathRegex: /\/partials\//,
                    processPartialName: function (path) {
                        return path.replace(/^views\/partials\/(.+)\.hbs/, "$1");
                    },
                    processName: function (filename) {
                        return filename.replace("views/", "").replace(".hbs", "");
                    }
                },
                files: {
                    "assets/js/templates.js": "views/**/*.hbs"
                }
            }
        },
        compare_size: {
            files: [
                "dist/js/solaris.min.js",
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
            all: [
                "test/index.html"
            ]
        }
    });

    // Load grunt tasks from NPM packages
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-handlebars");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-qunit");
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-compare-size");

    // Default task(s).
    grunt.registerTask("default", ["jshint", "requirejs", "less:development", "copy", "compare_size"]);
    grunt.registerTask("travis", ["jshint", "requirejs", "less:production", "compare_size"]);
    grunt.registerTask("test", ["qunit"]);

};