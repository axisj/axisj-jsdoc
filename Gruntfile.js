/**
 * http://gruntjs.com/configuring-tasks
 */
module.exports = function (grunt) {
    var path = require('path');
    var DEMO_PATH = 'document';
    var DEMO_SAMPLE_PATH = '../axisj/';
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            options: {
                hostname: '*'
            },
            demo: {
                options: {
                    port: 2016,
                    base: DEMO_PATH,
                    middleware: function (connect, options) {
                        return [
                            require('connect-livereload')(),
                            connect.static(path.resolve(options.base))
                        ];
                    }
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            less: {
                files: ['less/**/*.less'],
                tasks: ['less']
            },
            lesscopy: {
                files: ['static/styles/axisjdoc.css'],
                tasks: ['copy:css']
            },
            jscopy: {
                files: ['static/scripts/main.js'],
                tasks: ['copy:js']
            },
            jsdoc: {
                files: ['**/*.tmpl', '*.js'],
                tasks: ['jsdoc']
            }
        },

        clean: {
            demo: {
                src: DEMO_PATH
            }
        },

        jsdoc: {
            demo: {
                src: [

	                DEMO_SAMPLE_PATH + 'lib/AXConfig.js',
	                DEMO_SAMPLE_PATH + 'lib/AXUtil.js',
	                DEMO_SAMPLE_PATH + 'lib/AXCore.js',
	                DEMO_SAMPLE_PATH + 'lib/AXTree.js',
	                DEMO_SAMPLE_PATH + 'lib/AXGrid.js',
	                DEMO_SAMPLE_PATH + 'lib/AXInput.js',
	                DEMO_SAMPLE_PATH + 'lib/AXModal.js',
	                DEMO_SAMPLE_PATH + 'lib/AXSelect.js',
	                DEMO_SAMPLE_PATH + 'lib/AXTab.js',

	                //DEMO_SAMPLE_PATH + 'lib/AXDOMRange.js',
	                //DEMO_SAMPLE_PATH + 'lib/AXDrag.js',
	                DEMO_SAMPLE_PATH + 'lib/AXEditor.js',
	                //DEMO_SAMPLE_PATH + 'lib/AXExcelConvert.js',
	                //DEMO_SAMPLE_PATH + 'lib/AXSplit.js',

	                //DEMO_SAMPLE_PATH + 'lib/AXHtmlElement.js',

	                DEMO_SAMPLE_PATH + 'lib/AXMobileMenu.js',

	                //DEMO_SAMPLE_PATH + 'lib/AXModelControl.js',
	                //DEMO_SAMPLE_PATH + 'lib/AXModelControlGrid.js',
	                DEMO_SAMPLE_PATH + 'lib/AXMultiSelector.js',
	                DEMO_SAMPLE_PATH + 'lib/AXProgress.js',
	                DEMO_SAMPLE_PATH + 'lib/AXSearch.js',

	                DEMO_SAMPLE_PATH + 'lib/AXSlideViewer.js',

	                DEMO_SAMPLE_PATH + 'lib/AXTopDownMenu.js',

	                DEMO_SAMPLE_PATH + 'lib/AXUpload5.js',
	                DEMO_SAMPLE_PATH + 'lib/AXUserSelect.js',
	                DEMO_SAMPLE_PATH + 'lib/AXValidator.js',
	                //DEMO_SAMPLE_PATH + 'lib/AXWaterfall.js',

                    // You can add README.md file for index page at documentations.
                    'index.md'
                ],
                options: {
                    verbose: true,
                    destination: DEMO_PATH,
                    configure: 'conf.json',
                    template: './',
                    'private': false
                }
            }
        },

        less: {
            dist: {
                src: 'less/**/axisjdoc.less',
                dest: 'static/styles/axisjdoc.css'
            }
        },

        copy: {
            css: {
                src: 'static/styles/axisjdoc.css',
                dest: DEMO_PATH + '/styles/axisjdoc.css'
            },

            js: {
                src: 'static/scripts/main.js',
                dest: DEMO_PATH + '/scripts/main.js'
            }
        },

	    wkhtmltopdf: {
		    dev: {
			    src: DEMO_PATH + '/*.html',
			    dest: 'pdf/output/'
		    }
	    }
    });

    // Load task libraries
    [
		'grunt-contrib-connect',
		'grunt-contrib-watch',
		'grunt-contrib-copy',
		'grunt-contrib-clean',
		'grunt-contrib-less',
		'grunt-jsdoc',
		'grunt-wkhtmltopdf'
    ].forEach(function (taskName) {
        grunt.loadNpmTasks(taskName);
    });

    // Definitions of tasks

    grunt.registerTask('watch_run', 'Watch project files', [
        'axisj_jsdoc_bulid',
        //'connect:demo',
        'watch'
    ]);

    grunt.registerTask('axisj_jsdoc_bulid', 'Create documentations for demo', [
        'less',
        'clean:demo',
        'jsdoc:demo'
    ]);


	grunt.registerTask('axisj_jsdoc_topdf', 'Create documentations for pdf', [
		'wkhtmltopdf:dev'
	]);
};
