;(function (angular) {
    'use strict';

    angular.module('wPage').directive('indexMenuBox', [
        function(){
            return {
                restrict: 'E',
                replace: 'true',
                transclude: true,
                templateUrl: 'src/views/directives/index_menu_box.html',
                scope: {
                    boxTitle: '@'
                },
                link: function (scope, element, attrs) {
                    scope.showContent = false;
                    var hasChildren = element.find('.box-content').children().length;
                    scope.toggleChildren = function () {
                        if (!hasChildren) return;

                        scope.showContent = !scope.showContent;
                    };
                }
            };
        }]);
} (angular));
