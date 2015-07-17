'use strict';

// Configuring the Articles module
angular.module('donate').run(['Menus',
	function(Menus) {
		// Add donate menu
		Menus.addMenu('捐赠');
		Menus.addMenuItem('捐赠', '捐赠', 'articles', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem('捐赠', 'articles', 'List Articles', 'articles');
		Menus.addSubMenuItem('捐赠', 'articles', 'New Article', 'articles/create');
	}
]);