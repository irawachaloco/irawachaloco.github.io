(function (angular) {
    'use strict';

    angular.module('wPage').controller('badabi-badabu/app', [
        '$scope',
        function ($scope) {
            $scope.bichos = [
                'bolita', 'charal', 'chuca'
            ];
        }
    ]);
}(angular));