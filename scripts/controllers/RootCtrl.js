define([
	'controllers/controllers'
	],
	function(controllers) {
		controllers.controller('RootCtrl', 
			[
				'$scope', 
				
				function($scope) {
					$scope.todoList = {
						list: 'Home',
						details: [
							{
								item: 'placeholder',
								statusCode: 1
							}
						]
					};
				}
			]
		);
	}
);