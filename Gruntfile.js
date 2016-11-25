module.exports = function(grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-html-template');
    grunt.loadNpmTasks('grunt-contrib-watch');
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
        watch: {
            build: {
                files: ['pages/**/*.html'],
                tasks: ['html_template'],
                options: {
                    spawn: false
                }
            }
        }
    });
    grunt.registerTask('default', [
        'clean',
        'html_template'
    ]);
};
