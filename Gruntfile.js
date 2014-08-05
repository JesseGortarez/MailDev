module.exports = function(grunt) {

  // Requires a `renameBase` property in task config options.
  var flattenPath = function (dest, src) {
    var path = grunt.task.current.data.renameBase;
    // Make files sibling to those in `renameBase`.
    if (src.indexOf(path) === 0) {
      return dest + src.slice(path.length);
    } else {
      return dest + src;
    }
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 3333,
          hostname: '0.0.0.0',
          base: 'build',
          livereload: true
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      livereload: {
        files: ['assets/**/*.less', 'assets/**/*.hbs'],
        tasks: ['build']
      }
    },
    clean: {
      build: ['build']
    },
    inlinecontent: {
      main: {
        expand: true,
        src: 'build/*.html',
        css: ['build/css/all.css'],
        dest: 'build',
        renameBase: 'build',
        rename: flattenPath
      }
    },
    'compile-handlebars': {
      main: {
        template: 'assets/*.hbs',
        // These properties will be available in partials and templates.
        templateData: {text: 'Hello!'},
        output: '<%= inlinecontent.main.src %>',
        // Helper files must share the same name as the helper itself.
        helpers: 'assets/helpers/**/*.js',
        partials: 'assets/**/*.hbs'
      }
    },
    less: {
      main: {
        options: {
          paths: ['assets/css']
        },
        files: {
          'build/css/all.css': 'assets/css/all.less'
        }
      }
    }
  });
  require('load-grunt-tasks')(grunt, ['grunt-*']);
  grunt.registerTask('default', ['build', 'connect', 'watch']);
  grunt.registerTask('build', ['clean:build', 'less', 'compile-handlebars', 'inlinecontent']);
};
