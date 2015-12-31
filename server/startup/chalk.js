/**
 * Enable Chalk
 * @see https://github.com/chalk/chalk
 */
Meteor.startup(() => {
  chalk = Meteor.npmRequire('chalk');
  chalk.enabled = true;
});
