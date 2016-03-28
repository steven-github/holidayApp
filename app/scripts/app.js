'use strict';

/**
 * @ngdoc overview
 * @name holidayAppApp
 * @description
 * # holidayAppApp
 *
 * Main module of the application.
 */
angular
    .module('holidayAppApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
        // use the HTML5 History API
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });