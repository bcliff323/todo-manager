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
								list: 'One',
								details: [
									{
										item: 'One',
										statusCode: 1
									}
								]
							},
							{
								list: 'Two',
								details: [
									{
										item: 'Two',
										statusCode: 1
									}
								]
							},
							{
								list: 'Three',
								details: [
									{
										item: 'Three',
										statusCode: 1
									}
								]
							},
							{
								list: 'Four',
								details: [
									{
										item: 'Four',
										statusCode: 1
									}
								]
							},
							{
								list: 'Five',
								details: [
									{
										item: 'Five',
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