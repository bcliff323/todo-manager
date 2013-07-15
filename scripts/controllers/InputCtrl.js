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
						for(var i = 0, len = $scope.$parent.todoLists.length; i < len; i++) {
							if($scope.$parent.todoLists[i].list === $scope.$parent.activeList.list) {
								$scope.$parent.todoLists.splice(i, 1);

								if($scope.$parent.todoLists[i] !== undefined) {
									$scope.$parent.activeList = $scope.$parent.todoLists[i];
									$scope.$parent.setRoute($scope.$parent.todoLists[i].list);
								} else {
									$scope.$parent.activeList = $scope.$parent.todoLists[i-1] || {};
									$scope.$parent.setRoute('/');
								}
								break;
							}
						}
					};
				}
			]
		);
	}
);