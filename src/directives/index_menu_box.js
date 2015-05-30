;(function (angular) {
    'use strict';

    angular.module('wPage').directive('indexMenuBox', [
        '$location',
        function($location){
            return {
                restrict: 'E',
                replace: 'true',
                transclude: true,
                templateUrl: 'src/views/directives/index_menu_box.html',
                scope: {
                    boxTitle: '@',
                    goTo: '@'
                },
                link: function (scope, element, attrs) {
                    scope.showContent = false;
                    var hasChildren = element.find('.box-content').children().length;
                    scope.toggleChildren = function () {
                        navigate();
                        if (!hasChildren) return;

//                        desactivé el showContent borrando ng-show en el index_menu_box
                        scope.showContent = !scope.showContent;
                        scope.extraClass = scope.extraClass ? undefined : 'show-subnav';
                    };
                    function navigate () {
                        if (scope.goTo) {
                            $location.url(scope.goTo);
                        }
                    }
                }
            };
        }]);
} (angular));
