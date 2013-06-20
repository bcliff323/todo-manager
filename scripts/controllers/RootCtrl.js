define([
	'controllers/controllers'
	],
	function(controllers) {
		controllers.controller('RootCtrl', 
			[
				'$scope', 
				
				function($scope) {

					$scope.todoItems = [
						{ 
							item: 'bustle', 
							status: 'Not Started',
							statusCode: 0
						},
						{ 
							item: 'paper work', 
							status: 'In Progress',
							statusCode: 0
						},
						{ 
							item: 'dishes', 
							status: 'Complete',
							statusCode: 0
						}
					];

				}
			]
		);
	}
);