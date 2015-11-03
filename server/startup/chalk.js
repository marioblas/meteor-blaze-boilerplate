/**
 * Enable Chalk
 * @see https://github.com/chalk/chalk
 */
Meteor.startup(function() {
	chalk = Meteor.npmRequire('chalk');

	chalk.enabled = true;
});
