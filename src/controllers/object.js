(function (angular) {
    'use strict';

    angular.module('wPage').controller('object', [
        '$scope',
        function ($scope) {
            $scope.name = 'My Name';
        }
    ]);
}(angular));