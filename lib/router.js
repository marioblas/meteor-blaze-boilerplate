FlowRouter.route('/', {
	name: 'home', // Optional

	// Do some action for this route
	action: function() {
		console.log( "Yeah! We are on the home page!" );
	}
});

FlowRouter.route('/blog/:postId', {
	name: 'blog', // Optional

	// Do some action for this route
	action: function(params, queryParams) {
		console.log( "Yeah! We are on the blog page!" );
		console.log('Params:', params);
		console.log('Query Params:', queryParams);
	}
});
