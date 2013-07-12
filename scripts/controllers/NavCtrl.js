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
					$scope.newListName = '';
					$scope.showInput = false;

					$scope.setRoute = function(route) {
						var lists = $scope.todoLists;

						$location.path(route);

						for(var i=0, len = lists.length; i < len; i++) {
							if(lists[i].list === route) {
								$scope.$parent.activeList = lists[i];
							}
						}
					};

					$scope.addNewList = function() {
						toggleInputVisibility();
						
						if($scope.newListName !== '') {
							$scope.$parent.todoLists.push({
								list: $scope.newListName,
								details: []
							});
							$scope.setRoute($scope.newListName);
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