require.config({
    paths: {
        angular: 'lib/angular.min',
        jquery: 'lib/jquery',
        domReady: 'lib/domReady',
        app: 'app'
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        }
    }
});

require([
    'angular',
    'app',
    'domReady',
    'jquery',
    'controllers/RootCtrl',
    'controllers/InputCtrl',
    'controllers/ListCtrl',
    'controllers/NavCtrl',
    'services/Lists'
    ],
    function(angular, app, domReady) {
        domReady(function() {
            angular.bootstrap(document, ['RootApp']);
        });
    }
);