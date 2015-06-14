(function (angular) {
    'use strict';

    angular.module('wPage').controller('design', [
        '$scope',
        function ($scope) {
            $scope.name = 'My Name';
        }
    ]);
}(angular));