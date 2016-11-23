module.exports = function(grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-html-template');
    grunt.initConfig({
        path: {
            publicDir: 'pages',
            buildDir: 'www'
        },
        clean: {
            options: {
                force: true
            },
            build: ['<%= path.buildDir %>'],
            release: ['<%= path.buildDir %>/**/*.html']
        },
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
                cwd: "<%= path.publicDir %>",
                src: "**/*.html",
                dest: "<%= path.buildDir %>"
            }
        },
    });
    grunt.registerTask('default', [
        'clean',
        'html_template'
    ]);
};
