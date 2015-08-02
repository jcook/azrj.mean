'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus', '$location',
	function($scope, Authentication, Menus, $location) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menus = Menus.getMenus();
        
        /* statistics variables. */
        $scope.search_cnt = 0;
        
        $scope.boards = [
            {
                name: '广场',
                ref: 'http://www.manyoubang.com/home-index.html',
                active: true,
            },
            {
                name: '疾病',
                ref: 'http://www.manyoubang.com/group.html',
                active: false,
            },
            {
                name: '科普',
                ref: 'http://www.manyoubang.com/home-subjects-page-1',
                active: false,
            }
        ];
        
        $scope.click_list = function(arr, id) {
            /* clear first. */
            arr.forEach(function(e) {
                e.active = false;
            });
            arr[id].active = true;
        };
        
		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
        
        $scope.search = function() {
            $scope.search_cnt++;
            //alert(this.content);
            $scope.search_content = this.content;
            $location.path('/search/' + this.content);
            /* TODO: do searching with content keyword and redirect to the searching page. */
            //$location.path('articles/' + response._id);
        };
        
        $scope.isHome = function() {            
            return $location.path() === '/';
            //return $stateProvider.state === 'home'; why this way cannot work?
        };
	}
]);