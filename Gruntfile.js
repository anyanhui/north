module.exports = function(grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-html-template');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        path: {
            tpl: 'tpl',
            publicDir: 'public_dev',
            distDir: 'www',
            buildDir: 'build_new'
        },
        clean: {
            options: {
                force: true
            },
            build: ['<%= path.buildDir %>'],
            release: ['<%= path.buildDir %>']
        },
        useminPrepare: {
            html: '<%= path.tpl %>/pages/*.html',
            options: {
                root: '.',
                dest: '<%= path.buildDir %>'
            }
        },
        filerev: {
            options: {
                algorithm: 'md5',
                length: 8
            },
            assets: {
                files: [{
                    src: [
                        '<%= path.buildDir %>/css/**/*.css',
                        '<%= path.buildDir %>/js/**/*.js'
                    ]
                }]
            }
        },
        usemin: {
            html: '<%= path.tpl %>/*.html',
            options: {
                assetsDirs: ['<%= path.buildDir %>']
            }
        },
        copy: {
            html: {
                files: [{
                    expand: true,
                    cwd: '<%= path.tpl %>/pages',
                    src: ['**/*.html'],
                    dest: '<%= path.tpl %>',
                    filter: 'isFile'
                }]
            },
            css: {
                files: [{
                    expand: true,
                    cwd: '<%= path.buildDir %>/css/',
                    src: ['**/*.css'],
                    dest: '<%= path.distDir %>/css'
                }]
            },
            js: {
                files: [{
                    expand: true,
                    cwd: '<%= path.buildDir %>/js/',
                    src: ['**/*.js'],
                    dest: '<%= path.distDir %>/js'
                }]
            },
            images: {
                files: [{
                    expand: true,
                    cwd: '<%= path.publicDir %>/images/',
                    src: ['**/*.{png,jpg,gif,svg,swf}'],
                    dest: '<%= path.distDir %>/images'
                }]
            }
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
                cwd: "<%= path.tpl %>",
                src: "*.html",
                dest: "<%= path.distDir %>"
            }
        },
        watch: {
            build: {
                files: ['<%= path.tpl %>/pages/**/*.html'],
                tasks: ['copy:html','html_template'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('copyStatic', [
        'copy:css',
        'copy:js',
        'copy:images'
    ]);

    grunt.registerTask('main', [
        'copy:html',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'filerev',
        'usemin',
        'copyStatic'
    ]);

    grunt.registerTask('server', [
        'watch'
    ]);

    grunt.registerTask('default', [
        'clean',
        'main',
        'html_template'
    ]);
};
