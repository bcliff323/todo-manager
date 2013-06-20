define([
    'angular',
    'controllers/controllers',
    'services/services',
    'filters/filters',
    'directives/directives'
    ], 
    function (angular) {
        return angular.module('RootApp', 
            [
                'controllers', 
                'services',
                'filters', 
                'directives'
            ]
        );
    }
);