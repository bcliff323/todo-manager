define([
	'controllers/controllers'
	],
	function(controllers) {
		controllers.controller('RootCtrl', 
			[
				'$scope', 
				
				function($scope) {
					$scope.todoLists = [
						{
							list: 'Home',
							details: [
								{
									item: 'placeholder',
									statusCode: 1
								}
							]
						},
						{
							list: 'About',
							details: [
								{
									item: 'placeholder',
									statusCode: 1
								}
							]
						},
						{
							list: 'Another',
							details: [
								{
									item: 'placeholder',
									statusCode: 1
								}
							]
						}
					];
				}
			]
		);
	}
);