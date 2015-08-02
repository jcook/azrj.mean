'use strict';

angular.module('core').controller('SearchController', ['$scope', 'Authentication', '$stateParams', '$location', '$http', '$filter',
	function($scope, Authentication, $stateParams, $location, $http, $filter) {
		$scope.authentication = Authentication;
        
        $scope.search_content = $stateParams.content === 'undefined' ? '' : $stateParams.content;

        $scope.relateds = [
            {name: '相关讨论', active: true},
            {name: '相关医生回复', active: false},
            {name: '相关药物', active: false},
            {name: '相关疗法', active: false}
        ];

        $scope.blocks = [
            {name: '内容', active: true},
            {name: '用户', active: false},
            {name: '群组', active: false}
        ];

        $scope.click_list = function(arr, id) {
            /* clear first. */
            arr.forEach(function(e) {
                e.active = false;
            });
            arr[id].active = true;

            /* re-init variables as page changed. */
            $scope._init();

        };

        $scope.search = function() {
            if ($scope.search_content === '') {
                /* when got empty input we should find nothing, so clear variable.  */
                $scope.__init();
                return;
            }

            var url = '',
                filter_condition = '';

            if ($scope.blocks[0].active) {
                url = './modules/core/db/posts.json';
                //filter_condition = $scope.search_content
            } else if ($scope.blocks[1].active) {
                url = './modules/core/db/man-user.json';
            } else if ($scope.blocks[2].active) {
                url = './modules/core/db/man-board.json';   
            }
            if (url === '') {
                $scope.error = 'ERR: invalid search type!';
                return;
            }
            $http.get(url).success(function(data, status, headers, config) {
                    /* filter out results by search input box. */
                    $scope.posts = $filter('filter')(data, $scope.search_content);
                }).error(function(data, status, headers, config) {
                    $scope.error = 'ERR: ' + status + ' ' + headers;
                });
        };

        /* internal function */
        $scope.__init = function() {
            /* clear error message */
            $scope.error = '';
            $scope.posts = [];
        };
        $scope._init = function() {
            /* init variables */
            $scope.__init();

            /* do searching for each initialization. */
            $scope.search();
        };

        /* init */
        $scope._init();
	}
]);