const authenticatedRedirect = (context, redirect) => {
  // Context is the output of `FlowRouter.current()`
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    redirect('/login');
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [authenticatedRedirect],
});

authenticatedRoutes.route('/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render('default', { yield: 'dashboard' });
  },
});
