'use strict';

// Configuring the Articles module
angular.module('donate').run(['Menus',
	function(Menus) {
		var menuId = '捐赠',
			menuName = '捐赠';
		// Add donate menu
		Menus.addMenu(menuId);
		Menus.addMenuItem(menuId, menuName, 'articles', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem(menuId, 'articles', '捐赠列表', 'articles');
		Menus.addSubMenuItem(menuId, 'articles', '提供捐赠', 'articles/create');
		Menus.addSubMenuItem(menuId, 'articles', '领取捐赠', 'articles/create');
	}
]);