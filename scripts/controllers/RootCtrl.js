define([
	'controllers/controllers'
	],
	function(controllers) {
		controllers.controller('RootCtrl', 
			[
				'$scope', 
				'Lists',
				
				function($scope, Lists) {
					$scope.todoLists = Lists.query();
					$scope.activeList = $scope.todoLists[0];
				}
			]
		);
	}
);