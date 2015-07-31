'use strict';

// Articles controller
angular.module('activity').controller('ActController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles', 'Menus', 'ArticlesType',
	function($scope, $stateParams, $location, Authentication, Articles, Menus, ArticlesType) {
		$scope.authentication = Authentication;

        var setAllInactive = function() {
            angular.forEach($scope.workspaces, function(workspace) {
                workspace.active = false;
            });
        };

        var addNewWorkspace = function() {
            var id = $scope.workspaces.length + 1;
            $scope.workspaces.push({
                id: id,
                name: 'Workspace ' + id,
                active: true
            });
        };

        $scope.textContent = 'invalid';
 
        $scope.workspaces =
        [
            { id: 1, name: '心情更新', text: '此前什么心情', active:true  },
            { id: 2, name: '最近...', text: '最近正在做...', active:false },
            { id: 3, name: '活动...', text: '当前活动...', active:false }
        ];
 
        $scope.addWorkspace = function () {
            setAllInactive();
            addNewWorkspace();
        };

        $scope.tabSelect = function(str) {
            $scope.textContent = str;
        };
	}
]);