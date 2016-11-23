module.exports = function(grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-html-template');
    grunt.initConfig({
        html_template: {
            options: {
                locals:  {
                    title: "north"
                },
                beautify: {
                    indent_size: 4
                }
            },
            build_html: {
                expand: true,
                cwd: "pages",
                src: "**/*.html",
                dest: "www"
            }
        },
    });
    grunt.registerTask('default', [
        'html_template'
    ]);
};
