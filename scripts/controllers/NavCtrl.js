define([
	'controllers/controllers'
	],
	function(controllers) {
		controllers.controller('NavCtrl', 
			[
				'$scope',
				'$location',
				
				function($scope, $location) {
					$scope.todoLists = $scope.$parent.todoLists;

					$scope.setRoute = function(route) {
						var lists = $scope.todoLists;

						$location.path(route);

						for(var i=0, len = lists.length; i < len; i++) {
							if(lists[i].list === route) {
								$scope.$parent.activeList = lists[i];
							};
						}
					};
				}
			]
		);
	}
);