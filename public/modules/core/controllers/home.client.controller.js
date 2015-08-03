'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$location',
	function($scope, Authentication, $location) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
        
        $scope.isHome = function() {            
            return $location.path() === '/';
            //return $stateProvider.state === 'home'; why this way cannot work?
        };
	}
]);