# grunt-wkhtmltopdf

A simple [Grunt][grunt] multitask that uses [wkhtmltopdf][wkhtmltopdf] to convert HTML files to PDF.
Convertion to PDF takes care of `@media print` CSS rules and preserves links to remote web pages.

## Getting Started

### Setting up wkhtmltopdf 

Download and install wkhtmltopdf from the [project page][wkhtmltopdf_dl].

Make sure `wkhtmltopdf` is accessible from your `PATH` (Try `wkhtmltopdf -V` in your Terminal). 
I'm on Mac OS X, so I created the following symlink to my `/usr/local/bin/` folder:

```
ln -s /usr/local/bin/wkhtmltopdf.app/Contents/MacOS/wkhtmltopdf /usr/local/bin/wkhtmltopdf
```

You can also install it via homebrew: `$ brew install wkhtmltopdf`.


### Use it with grunt

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-wkhtmltopdf`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-wkhtmltopdf');
```

[wkhtmltopdf]: http://code.google.com/p/wkhtmltopdf/
[wkhtmltopdf_dl]: http://code.google.com/p/wkhtmltopdf/downloads/list
[grunt]: https://github.com/gruntjs/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation
Simply add task definition in your gruntfile. See the folllowing example:

```javascript
    //...
    wkhtmltopdf: {
      dev: {
        src: 'path/to/some/html/file/*.html',
        dest: 'pdf/output/'
      },
      prod: {
        src: 'path/to/some/html/file/*.html',
        dest: 'pdf/output/'
      }
    },
    //...
```

Run `grunt wkhtmltopdf` to execute all the targets or `grunt wkhtmltopdf:targetname` to execute a specific target. Every `html` file defined by the `src` parameter will be turned into a PDF and saved to `dest` folder.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History

 - *v0.1.0*: First Release
 - *v0.2.0*: Fixed compatibility with grunt 0.4 
 - *v0.3.0*: grunt-wkhtmltopdf is now a multi-task

## License
Copyright (c) 2012 Olivier Audard  
Licensed under the MIT license.
