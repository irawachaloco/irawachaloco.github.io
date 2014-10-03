/*
    I like to have a routes file completely independent from the application itself,
    just to be clear where I'm defining what
*/
(function (angular) {
    'use strict';

    angular.module('wPage', ['ngRoute']).config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    controller:'home/app', // I name the main controller on each page as 'app' as a personal preference.
                    templateUrl:'app/home/app.html'
                })
                .when('/css_effects', {
                    controller:'css_effects/app',
                    templateUrl:'app/css_effects/app.html'
                })
                .when('/badabi-badabu', {
                    controller:'badabi-badabu/app',
                    templateUrl:'app/badabi-badabu/app.html'
                })
                .when('/chunches', {
                    controller:'chunches/app',
                    templateUrl:'app/chunches/app.html'
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
                { url: '/badabi-badabu', text: 'badabí badabú' },
                { url: '/chunches', text: 'Galería de Chunches' }
            ];
        }
    ])
} (angular));