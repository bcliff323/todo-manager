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

					$scope.removeActiveList = function() {
						for(var i = 0, len = $scope.$parent.todoLists.length-1; i < len; i++) {
							if($scope.$parent.todoLists[i].list === $scope.$parent.activeList.list) {
									console.log($scope.$parent.todoLists);
									$scope.$parent.todoLists.splice(i, 1);
									console.log($scope.$parent.todoLists);
								// 	console.log($scope.$parent.activeList);
								// 	$scope.$parent.activeList.details.splice(0, 1);
								// 	console.log($scope.$parent.activeList);
							}
						}
					};
				}
			]
		);
	}
);