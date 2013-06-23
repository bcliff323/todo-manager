define([
	'controllers/controllers'
	],
	function(controllers) {
		controllers.controller('NavCtrl', 
			[
				'$scope',
				'$routeParams',
				
				function($scope, $routeParams) {
					$scope.todoLists = $scope.$parent.todoLists;
				}
			]
		);
	}
);