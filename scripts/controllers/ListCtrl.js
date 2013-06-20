define([
	'controllers/controllers'
	],
	function(controllers) {
		controllers.controller('ListCtrl', 
			[
				'$scope',
				
				function($scope) {
					$scope.name = 'image';
				}
			]
		);
	}
);