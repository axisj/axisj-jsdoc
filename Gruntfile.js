/**
 * http://gruntjs.com/configuring-tasks
 */
module.exports = function (grunt) {
    var path = require('path');
    var DOCU_PATH = 'document';
<<<<<<< HEAD
    var SOURCE_PATH = '../axisj/';
=======
    var SOURCE_PATH = 'src';
>>>>>>> 293d56bdd520d6d6abf2744627b312d32911df86
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
                src: DOCU_PATH
            }
        },
        jsdoc: {
            demo: {
                src: [
<<<<<<< HEAD

	                SOURCE_PATH + 'lib/AXConfig.js',

	                SOURCE_PATH + 'lib/AXUtil.js',
	                SOURCE_PATH + 'lib/AXCore.js',
	                SOURCE_PATH + 'lib/AXTree.js',
	                SOURCE_PATH + 'lib/AXGrid.js',
	                SOURCE_PATH + 'lib/AXInput.js',
	                SOURCE_PATH + 'lib/AXModal.js',
	                SOURCE_PATH + 'lib/AXSelect.js',
	                SOURCE_PATH + 'lib/AXTab.js',

	                //SOURCE_PATH + 'lib/AXDOMRange.js',
	                //SOURCE_PATH + 'lib/AXDrag.js',
	                SOURCE_PATH + 'lib/AXEditor.js',
	                //SOURCE_PATH + 'lib/AXExcelConvert.js',
	                //SOURCE_PATH + 'lib/AXSplit.js',

	                //SOURCE_PATH + 'lib/AXHtmlElement.js',

	                SOURCE_PATH + 'lib/AXMobileMenu.js',

	                //SOURCE_PATH + 'lib/AXModelControl.js',
	                //SOURCE_PATH + 'lib/AXModelControlGrid.js',
	                SOURCE_PATH + 'lib/AXMultiSelector.js',
	                SOURCE_PATH + 'lib/AXProgress.js',
	                SOURCE_PATH + 'lib/AXSearch.js',

	                SOURCE_PATH + 'lib/AXSlideViewer.js',

	                SOURCE_PATH + 'lib/AXTopDownMenu.js',

	                SOURCE_PATH + 'lib/AXUpload5.js',
	                SOURCE_PATH + 'lib/AXUserSelect.js',
	                SOURCE_PATH + 'lib/AXValidator.js',
	                //SOURCE_PATH + 'lib/AXWaterfall.js',

=======
	                SOURCE_PATH + '/samples.js',
>>>>>>> 293d56bdd520d6d6abf2744627b312d32911df86
                    // You can add README.md file for index page at documentations.
                    'index.md'
                ],
                options: {
                    verbose: true,
                    destination: DOCU_PATH,
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
                dest: DOCU_PATH + '/styles/axisjdoc.css'
            },
            js: {
                src: 'static/scripts/main.js',
                dest: DOCU_PATH + '/scripts/main.js'
            }
        },
	    wkhtmltopdf: {
		    dev: {
<<<<<<< HEAD
			    /*
			    src: [
					DOCU_PATH + 'Array.html',
					DOCU_PATH + 'AXCalendar.html',
					DOCU_PATH + 'AXConfig.html',
					DOCU_PATH + 'AXContextMenu.html',
					DOCU_PATH + 'AXContextMenuClass.html',
					DOCU_PATH + 'AXEditor.html',
					DOCU_PATH + 'axf.html',
					DOCU_PATH + 'AXGrid.html',
					DOCU_PATH + 'AXInputConverter.html',
					DOCU_PATH + 'AXJ.html',
					DOCU_PATH + 'AXMask.html',
					DOCU_PATH + 'AXMobileMenu.html',
					DOCU_PATH + 'AXMobileModal.html',
					DOCU_PATH + 'AXModal.html',
					DOCU_PATH + 'AXMultiSelect.html',
					DOCU_PATH + 'AXNotification.html',
					DOCU_PATH + 'AXPopOver.html',
					DOCU_PATH + 'AXPopOverClass.html',
					DOCU_PATH + 'AXProgress.html',
					DOCU_PATH + 'AXReq.html',
					DOCU_PATH + 'AXReqQue.html',
					DOCU_PATH + 'AXResizable.html',
					DOCU_PATH + 'AXScroll.html',
					DOCU_PATH + 'AXSearch.html',
					DOCU_PATH + 'AXSelectConverter.html',
					DOCU_PATH + 'AXSlideViewer.html',
					DOCU_PATH + 'AXTabClass.html',
					DOCU_PATH + 'AXTopDownMenu.html',
					DOCU_PATH + 'AXTree.html',
					DOCU_PATH + 'AXUpload5.html',
					DOCU_PATH + 'AXUserSelect.html',
					DOCU_PATH + 'AXValidator.html',
					DOCU_PATH + 'Class.html',
					DOCU_PATH + 'Date.html',
					DOCU_PATH + 'Error.html',
					DOCU_PATH + 'Function.html',
					DOCU_PATH + 'index.html',
					DOCU_PATH + 'jQueryExtends.html',
					DOCU_PATH + 'Number.html',
					DOCU_PATH + 'Object.html',
					DOCU_PATH + 'String.html'
				],
				*/
			    src: DOCU_PATH + '/*.html',
			    dest: 'pdf/'
		    },
		    dev2: {
			    src: [
				    DOCU_PATH + '/index.html',
				    DOCU_PATH + '/String.html'
			    ],
			    dest: 'pdf/'
=======
			    src: DOCU_PATH + '/*.html',
			    dest: 'pdf/'
>>>>>>> 293d56bdd520d6d6abf2744627b312d32911df86
		    }
	    }
    });

    // Load task libraries
    [
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
	
	
	//npm install grunt-contrib-watch --save-dev
	//npm install grunt-contrib-copy --save-dev
	//npm install grunt-contrib-clean --save-dev
	//npm install grunt-contrib-less --save-dev
	//npm install git+https://github.com/jsdoc3/jsdoc.git
	//npm install grunt-wkhtmltopdf
};
