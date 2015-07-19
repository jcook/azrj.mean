'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('articles').factory('Articles', ['$resource',
	function($resource) {
		return $resource('articles/:articleId',
		{
			articleId: '@_id',
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('articles').factory('ArticlesType', ['$resource',
	function($resource) {
		return $resource('articles/type/:typeId', {typeId: '@type'});
	}
]);