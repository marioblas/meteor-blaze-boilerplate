const publicRoutes = FlowRouter.group({
  name: 'public',
});

publicRoutes.route('/', {
  name: 'home',
  action() {
    console.log('Yeah! We are on the home page!');
    BlazeLayout.render('default', { yield: 'home' });
  },
});

publicRoutes.route('/blog/:postId', {
  name: 'blog',
  action(params, queryParams) {
    console.log('Params:', params);
    console.log('Query Params:', queryParams);
  },
});

publicRoutes.route('/login', {
  name: 'login',
  action() {
    BlazeLayout.render('default', { yield: 'login' });
  },
});
