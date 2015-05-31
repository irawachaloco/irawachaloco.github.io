(function (angular) {
    'use strict';

    angular.module('wPage').directive('navbar', [
        '$location',
        function ($location) {
            return {
                restrict: 'E',
                replace: 'true',
                templateUrl: 'src/views/directives/navbar.html',
                scope: {
                },
                link: function (scope, element, attrs) {

                    scope.isLandingPage = function () {
                        return $location.url() === '/';
                    };

                    scope.$watch('isLandingPage()', setStatus);

                    function setStatus (status) {
                        if(status) {
                            scope.containerClass = 'landing-page';
                        } else {
                            scope.containerClass = 'inner-page';
                        }
                    }
                }
            };
        }
    ]);
}(angular));
