(function (angular) {
    'use strict';

    angular.module('wPage').controller('chunches/app', [
        '$scope',
        function ($scope) {
            $scope.chunches = [
                'bolita', 'charal', 'chuca'
            ];
            $scope.images = [
                'img1', 'img3', 'img2'
            ];
        }
    ]);
}(angular));