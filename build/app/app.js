var app = angular.module('gen', [
        'ngSanitize',
        'ui.router',
        'pascalprecht.translate',
        'ngMap'
    ]
);
app.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
    $urlRouterProvider.otherwise('/home');

    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.translations('en', {
        hello: 'Hello'

    });
    $translateProvider.translations('es', {
        hello: 'Hola'
    });
    $translateProvider.preferredLanguage('es');

    $stateProvider
        .state('root', {
            views: {
                'header': {
                    templateUrl: 'templates/header.html',
                    controller: 'headerController'
                },
                'footer': {
                    templateUrl: 'templates/footer.html',
                }
            }
        })
        .state('root.home', {
            url: '/home',
            views: {
                'content@': {
                    templateUrl: 'templates/home.html',
                    controller: 'homeController'
                }
            }
        })
        .state('root.add', {
            url: '/add',
            views: {
                'content@': {
                    templateUrl: 'templates/place.html',
                    controller: 'placeController'
                }
            }
        })
        .state('root.timelineController', {
            url: '/timeline',
            views: {
                'content@': {
                    templateUrl: 'templates/timeline.html',
                    controller: 'timelineController'
                }
            }
        })
        .state('root.evolution', {
            url: '/evolution',
            views: {
                'content@': {
                    templateUrl: 'templates/compare.html',
                    controller: 'compareController'
                }
            }
        })
        .state('root.compare', {
            url: '/compare',
            views: {
                'content@': {
                    templateUrl: 'templates/compare.html',
                    controller: 'compareController'
                }
            }
        })
        .state('root.single', {
            url: '/single',
            views: {
                'content@': {
                    templateUrl: 'templates/single.html'
                }
            }
        });
});
