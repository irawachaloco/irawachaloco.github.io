(function (angular) {
    'use strict';

    angular.module('wPage').controller('web', [
        '$scope',
        function ($scope) {
            $scope.name = 'My Name';
        }
    ]);
}(angular));