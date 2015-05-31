/*
    I like to have a routes file completely independent from the application itself,
    just to be clear where I'm defining what
*/
(function (angular) {
    'use strict';

    angular.module('wPage', ['ngRoute', 'ngAnimate', 'slick']).config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    controller:'index', // I name the main controller on each page as 'app' as a personal preference.
                    templateUrl:'src/views/index.html'
                })
                .when('/pintura', {
                    controller:'pintura', // I name the main controller on each page as 'app' as a personal preference.
                    templateUrl:'src/views/pintura.html'
                })
                .when('/photo', {
                    controller:'photo', // I name the main controller on each page as 'app' as a personal preference.
                    templateUrl:'src/views/photo.html'
                })
                .when('/object', {
                    controller:'object', // I name the main controller on each page as 'app' as a personal preference.
                    templateUrl:'src/views/object.html'
                })
                .when('/draw', {
                    controller:'draw', // I name the main controller on each page as 'app' as a personal preference.
                    templateUrl:'src/views/draw.html'
                })
                .otherwise({
                    redirectTo:'/'
                });
        }
    ]);

    // In case you want to define some stiff to be available globally, use this.
    angular.module('wPage').run([
        '$rootScope',
        function ($rootScope) {
            $rootScope.appTitle = 'Coso de Omar';
            $rootScope.appTabs = [
                { url: '/', text: 'coso' },
                { url: '/css_effects', text: 'css effects' },
                { url: '/badabi-badabu', text: 'badabí badabú' }
            ];
        }
    ])
} (angular));