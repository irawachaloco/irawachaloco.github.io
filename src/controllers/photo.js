(function (angular) {
    'use strict';

    angular.module('wPage').controller('photo', [
        '$scope',
        function ($scope) {
            $scope.name = 'My Name';
        }
    ]);
}(angular));