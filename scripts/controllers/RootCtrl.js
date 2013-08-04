define([
	'controllers/controllers'
	],
	function(controllers) {
		controllers.controller('RootCtrl', 
			[
				'$scope', 
				'Lists',
				'$location',
				
				function($scope, Lists, $location) {
					$scope.todoLists = Lists.query();
					$scope.activeList = $scope.todoLists[Lists.getIndex($location.path())] || {};

					$scope.setRoute = function(route) {
						var lists = $scope.todoLists;
						
						$location.path(route);

						for(var i=0, len = lists.length; i < len; i++) {
							if(lists[i].list === route) {
								$scope.activeList = lists[i];
							}
						}

						$scope.save();
					};

					$scope.save = function() {
						Lists.update();
					};

					if($scope.todoLists[0] !== undefined) {
						$scope.setRoute($scope.todoLists[0].list);
					}
					
				}
			]
		);
	}
);