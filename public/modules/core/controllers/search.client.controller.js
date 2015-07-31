'use strict';

angular.module('core').controller('SearchController', ['$scope', 'Authentication', '$stateParams', '$location',
	function($scope, Authentication, $stateParams, $location) {
		$scope.authentication = Authentication;
        
        $scope.search_content = $stateParams.content;
	}
]);