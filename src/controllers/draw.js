(function (angular) {
    'use strict';

    angular.module('wPage').controller('draw', [
        '$scope',
        function ($scope) {
            $scope.name = 'My Name';
        }
    ]);
}(angular));