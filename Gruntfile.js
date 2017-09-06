module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
          'style/reset.css'    : 'sass/reset.scss',
					'style/homepage.css' : 'sass/homepage.scss',
          'style/cast.css'    : 'sass/cast.scss',
					'style/art.css'    : 'sass/art.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
