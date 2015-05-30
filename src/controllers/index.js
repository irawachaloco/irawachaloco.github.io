(function (angular) {
    'use strict';

    angular.module('wPage').controller('index', [
        '$scope',
        function ($scope) {
            $scope.name = 'My Name';
        }
    ]);
}(angular));