FlowRouter.notFound = {
  // Subscriptions registered here don't have Fast Render support.
  subscriptions() {},
  action() {
    BlazeLayout.render('default', { yield: 'notFound' });
  },
};
