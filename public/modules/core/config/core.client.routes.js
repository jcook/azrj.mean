'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		}).
		state('diseases', {
			url: '/diseases',
			templateUrl: 'modules/core/views/home.client.view.html'
		}).
        state('search', {
			url: '/search/:content',
			templateUrl: 'modules/core/views/search.client.view.html'
		});
        
        //$locationProvider.html5Mode(true);

	}
]);