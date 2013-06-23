define([
	'controllers/controllers'
	],
	function(controllers) {
		controllers.controller('ListCtrl', 
			[
				'$scope',
				
				function($scope) {
					$scope.todoItems = $scope.$parent.todoList.details;

					$scope.removeItem = function(index) {
						$scope.todoItems.splice(index, 1);
					};
				}
			]
		);
	}
);