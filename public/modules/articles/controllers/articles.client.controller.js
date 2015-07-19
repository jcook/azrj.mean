'use strict';

// Articles controller
angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles', 'Menus', 'ArticlesType',
	function($scope, $stateParams, $location, Authentication, Articles, Menus, ArticlesType) {
		$scope.authentication = Authentication;

		// CONSTANT, do not modify
		$scope.selectCla = 'invalid';

		// dynamic array depends on different users or attributes belongs to them
		// It might to add a weight in each item so that we could decide which item
		// should be showed for this user.
		$scope.classify = [];

		$scope.menu = Menus.getMenu('Articles');
		for (var i = 0; i < $scope.menu.items.length; i++) {
			for (var j = 0; j < $scope.menu.items[i].items.length; j++) {
				// XXX: 'articles/type/' is the url substring in articles.client.config.js, should be kept the same!!!
				if ($scope.menu.items[i].items[j].link.indexOf('articles/type/') >= 0) {
					var link_len = $scope.menu.items[i].items[j].link.length,
						last_position = $scope.menu.items[i].items[j].link.lastIndexOf('/'),
						typeStr = $scope.menu.items[i].items[j].link.substring(last_position + 1, link_len);
					$scope.classify.push({name: $scope.menu.items[i].items[j].title, value: typeStr});
				}
			}
		}

		// Create new Article
		$scope.create = function() {
			if ($scope.selectCla === '' ||
			    $scope.selectCla === 'invalid') {
					$scope.error = '请选择正确的文章分类，以便查阅';
					return false;
			}

			// Create new Article object
			var article = new Articles({
				title: this.title,
				content: this.content,
				type: $scope.selectCla
			});

			// Redirect after save
			article.$save(function(response) {
				$location.path('articles/' + response._id);

				// Clear form fields
				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Article
		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					$location.path('articles');
				});
			}
		};

		// Update existing Article
		$scope.update = function() {
			var article = $scope.article;

			article.$update(function() {
				$location.path('articles/' + article._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Articles
		$scope.find = function() {
			$scope.articles = Articles.query();
		};

		// Find a list of Articles by type
		$scope.findByType = function() {
			//$scope.articles = ArticlesType.get({typeId: 0});
			$scope.typeId = $stateParams.typeId;
			$scope.articles = ArticlesType.query({typeId: $stateParams.typeId});
		};

		// Find existing Article
		$scope.findOne = function() {
			$scope.article = Articles.get({
				articleId: $stateParams.articleId
			});
		};
	}
]);