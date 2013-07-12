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
							}
						];
					};

					return Lists;
				}
			]
		);
	}
);