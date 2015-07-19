'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Adding the Articles menu and set menu items
		Menus.addMenu('Articles');

		Menus.addMenuItem('Articles', '知识共享库', 'articles', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem('Articles', 'articles', 'ALL', 'articles');
		Menus.addSubMenuItem('Articles', 'articles', '癌症面面观', 'articles/type/0');
		Menus.addSubMenuItem('Articles', 'articles', '名医话健康', 'articles/type/1');
		Menus.addSubMenuItem('Articles', 'articles', '你问我来答', 'articles/type/2');
		Menus.addSubMenuItem('Articles', 'articles', '经验要分享', 'articles/type/3');
		Menus.addSubMenuItem('Articles', 'articles', '上榜好推荐', 'articles/type/4');
		Menus.addSubMenuItem('Articles', 'articles', '创建文章', 'articles/create');
	}
]);