define([
	'controllers/controllers'
	],
	function(controllers) {
		controllers.controller('ItemCtrl', 
			[
				'$scope',
				
				function($scope) {
					$scope.statusCode = 0;
				}
			]
		);
	}
);