/**
 * Enable Chalk
 * @see https://github.com/chalk/chalk
 */
Meteor.startup(function() {
	var chalk = Meteor.npmRequire('chalk');

	chalk.enabled = true;
});
