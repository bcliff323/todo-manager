define([
	'controllers/controllers'
	],
	function(controllers) {
		controllers.controller('ListCtrl', 
			[
				'$scope',
				'$routeParams',
				
				function($scope, $routeParams) {
					$scope.todoItems = $scope.$parent.activeList.details;

					$scope.removeItem = function(index) {
						$scope.todoItems.splice(index, 1);
					};
				}
			]
		);
	}
);