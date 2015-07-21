'use strict';

// Setting up route
angular.module('activity').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('showTab', {
			url: '/activity',
			templateUrl: 'modules/activity/views/worktab.activity.client.view.html'
		});
	}
]);