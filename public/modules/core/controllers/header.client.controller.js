'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus', '$location',
	function($scope, Authentication, Menus, $location) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menus = Menus.getMenus();
        
        /* statistics variables. */
        $scope.search_cnt = 0;
        
        $scope.path = $location.path();        
        /* TODO:
         *  Do we really need prefix?
         *  Why `$locationProvider.html5Mode(true);' cannot work for search page? 
         */
        $scope.boards = [
            {
                name: '广场',
                prefix: '#!',
                ref: '/',
                active: true,
            },
            {
                name: '疾病',
                prefix: '#!',
                ref: '/diseases',
                active: false,
            },
            {
                name: '科普',
                prefix: '#!',
                ref: '/',
                active: false,
            }
        ];

        $scope.isActive = function(board) {
             //$scope.path = $location.path();        
            return (board.active && $location.path() === board.ref);
        };

        $scope.click_list = function(arr, id) {
            /* clear first. */
            arr.forEach(function(e) {
                e.active = false;
            });
            arr[id].active = true;
            //$scope.path = id + ' : ' + $location.path();
        
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
            $location.path('search/' + this.content);
            /* TODO: do searching with content keyword and redirect to the searching page. */
        };
        
        $scope.isHome = function() {            
            return $location.path() === '/';
            //return $stateProvider.state === 'home'; why this way cannot work?
        };
	}
]);