module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		 uglify : {
	      options : {
	        mangle : false
	      },
	 
	      my_target : {
	        files : {
				'assets/js/script.min.js' : [ 'assets/_js/script.js' ]
	        }
	      }
	    }, // uglify
		compass: {
			dist: {   
			  options: {
				sassDir: 'assets/_sass',
				cssDir: 'assets/css',
				environment: 'production'
			  }
			},
			dev: {                    
			  options: {
				sassDir: 'assets/_sass',
				cssDir: 'assets/css'
			  }
			}
		},
		watch: {
			compass: {
			   files: ['**/*.{scss,sass}'],
			   tasks: ['compass:dev']
			  },
			  js: {
				files: 'assets/_js/**/*',
				tasks: [ 'uglify' ]
			  }
		}
		
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask('default', [ 'uglify', 'watch', 'compass']);
};