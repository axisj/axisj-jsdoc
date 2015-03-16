'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      all: ['test/**/_test.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
      },
      all: [
        'Gruntfile.js',
        'tasks/{,*/}*.js',
        'test/{,*/}*.js',
      ]
    }
  });

  // Default task.
  grunt.registerTask('default', [
    'jshint',
    'nodeunit:all'
  ]);

};
