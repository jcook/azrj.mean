'use strict';

// Configuring the Activity module
angular.module('activity').run(['Menus',
	function(Menus) {
		var menuId = 'activity',
			menuName = '个人活动';
		// Add donate menu
		Menus.addMenu(menuId);
		Menus.addMenuItem(menuId, menuName, 'activity', 'dropdown', '/activity(/create)?');
		Menus.addSubMenuItem(menuId, 'activity', '发表心情', 'activity');
		Menus.addSubMenuItem(menuId, 'activity', '发表文章', 'activity/create');
		Menus.addSubMenuItem(menuId, 'activity', '发起活动', 'activity/create/action');
	}
]);