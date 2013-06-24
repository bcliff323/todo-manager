define([
	'controllers/controllers'
	],
	function(controllers) {
		controllers.controller('InputCtrl', 
			[
				'$scope',
				
				function($scope) {
					$scope.newItem = '';

					$scope.addNewItem = function() {
						if($scope.newItem !== '') { 
							$scope.$parent.activeList.details.unshift({
								item: $scope.newItem,
								statusCode: 0
							});
							$scope.newItem = '';
						}
					};
				}
			]
		);
	}
);