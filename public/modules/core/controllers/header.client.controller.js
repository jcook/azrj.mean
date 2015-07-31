'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus', '$location',
	function($scope, Authentication, Menus, $location) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menus = Menus.getMenus();
        
        /* statistics variables. */
        $scope.search_cnt = 0;

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