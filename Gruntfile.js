module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: [
        'gruntfile.js', 
        'scripts/controllers/*.js',
        'scripts/directives/*.js',
        'scripts/filters/*.js',
        'scripts/services/*.js',
        'scripts/app.js',
        'scripts/main.js'
      ],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    connect: {
      all: {
        options:{
          port: 9000,
          hostname: "0.0.0.0",
          keepalive: true
        }
      }
    },

    watch: {
      all: {
        files: [
          'Gruntfile.js',
          'index.html',
          'scripts/controllers/*.js',
          'scripts/directives/*.js',
          'scripts/filters/*.js',
          'scripts/services/*.js',
          'scripts/app.js',
          'scripts/main.js',
          'styles/less/*.less',
          'views/**/*'
        ],
        tasks: 'default',
        options: {
          livereload: true
        }
      }
    },

    less: {
      development: {
        files: {
          'styles/css/styles.css': 'styles/less/main.less'
        }
      },
      production: {
        options: {
          yuicompress: true
        },
        files: {
          'styles/css/styles.min.css': 'styles/less/main.less'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('server', ['connect']);
  grunt.registerTask('default', ['jshint', 'less']);
};
