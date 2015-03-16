/*
* grunt-wkhtmltopdf
* http://www.dhar.fr/grunt-wkhtmltopdf/
*
* Copyright (c) 2012 Olivier Audard, contributors
* Licensed under the MIT license.
*/
/*globals exports:false*/

exports.init = function(grunt) {
  'use strict';

  return {
    convert: function(options) {

      if (!options || !options.args) {
        grunt.warn("You need to specify atleast one input file, and exactly one output file");
        return null;
      }

      // TODO: ditch this when grunt v0.4 is released
      grunt.util = grunt.util || grunt.utils;

      return grunt.util.spawn({
        cmd: 'wkhtmltopdf',
        args: options.args
      }, function(err, result, code) {
        grunt.log.writeln('wkhtmltopdf done');
        if (!err) { return options.done(null); }
        // Something went horribly wrong.
        grunt.verbose.or.writeln();
        grunt.log.write('Running wkhtmltopdf...').error();
        if (code === 127) {
          grunt.log.errorlns(
            'In order for this task to work properly, wkhtmltopdf must be ' +
            'installed and in the system PATH (if you can run "wkhtmltopdf" at' +
            ' the command line, this task should work). Unfortunately, ' +
            'wkhtmltopdf cannot be installed automatically via npm or grunt. '
          );
          grunt.warn('wkhtmltopdf not found.', options.code);
        } else {
          result.split('\n').forEach(grunt.log.error, grunt.log);
          grunt.warn('wkhtmltopdf exited unexpectedly with exit code ' + code + '.', options.code);
        }
        options.done(code);
      });
    }
  };
};