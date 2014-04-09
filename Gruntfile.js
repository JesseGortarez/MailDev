module.exports = function(grunt) {
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
        src: 'assets/index.html',
        css: ['build/css/all.css'],
        dest: 'build/index.html',
      }
    },
    template: {
      main: {
        engine: 'handlebars',
        cwd: 'assets/',
        partials: ['assets/modules/**/*.hbs'],
        options: {},
        files: [
          {
            expand: true,
            cwd: 'assets/',
            src: '*.hbs',
            dest: 'build/',
            ext: '.html'
          }
        ]
      }
    },
    less: {
      main: {
        options: {
          paths: ['assets/css'],
          files: {
            'build/css/all.css': ['assets/css/all.less']
          }
        }
      }
    }
  });
  require('load-grunt-tasks')(grunt, ['grunt-*']);
  grunt.registerTask('default', ['build', 'connect', 'watch']);
  grunt.registerTask('build', ['clean', 'less', 'template', 'inlinecontent']);
};
