define([
	'controllers/controllers'
	],
	function(controllers) {
		controllers.controller('NavCtrl', 
			[
				'$scope',
				
				function($scope, $location) {
					$scope.todoLists = $scope.$parent.todoLists;
					$scope.newListName = '';
					$scope.showInput = false;

					$scope.addNewList = function() {
						toggleInputVisibility();

						if($scope.newListName !== '') {
							$scope.$parent.todoLists.push({
								list: $scope.newListName,
								details: []
							});
							$scope.$parent.setRoute($scope.newListName);
							$scope.newListName = '';
							$scope.showInput = false;
						}
					};

					var toggleInputVisibility = function() {
						$scope.showInput = !$scope.showInput;
					};
				}
			]
		);
	}
);