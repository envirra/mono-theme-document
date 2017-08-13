module.exports = function( grunt ) {
	require('jit-grunt')(grunt, {
	});
	
	grunt.initConfig( {
		watch: {
			book: {
				// We watch and compile sass files as normal but don't live reload here
				files: [ '**/*.md', '**/*.png', '!_book', '!node_modules' ],
				tasks: [ 'build' ],
				options: {
					spawn: false,
				},
			},
		},

		exec: {
			buildbook: {
				command: 'gitbook build'
			}
		},

	} );

	grunt.registerTask( 'default', [ 'watch' ] );
	grunt.registerTask( 'build', [ 'exec:buildbook' ] );

};