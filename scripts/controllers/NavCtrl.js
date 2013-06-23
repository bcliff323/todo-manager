define([
	'controllers/controllers'
	],
	function(controllers) {
		controllers.controller('NavCtrl', 
			[
				'$scope',
				'$routeParams',
				
				function($scope, $routeParams) {
					$scope.todoListName = $scope.$parent.todoList.list;
				}
			]
		);
	}
);