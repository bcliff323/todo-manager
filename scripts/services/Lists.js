define([
	'services/services'
	],
	function(services) {
		services.factory('Lists',
			[
				function(){
					var Lists = {};

					Lists.query = function() {
						return [
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
										item: 'placeholder2',
										statusCode: 0
									}
								]
							},
							{
								list: 'Another',
								details: [
									{
										item: 'placeholder3',
										statusCode: 2
									}
								]
							}
						];
					};

					return Lists;
				}
			]
		);
	}
);