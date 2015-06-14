(function (angular) {
    'use strict';

    angular.module('wPage').controller('photo', [
        '$scope',
        function ($scope) {
            $scope.imageList = [
                {
                    title:'untitulo',
                    url:'https://farm1.staticflickr.com/368/18287886786_5d05cc4c6d_b.jpg'
                },
                {
                    title:'untitulo',
                    url:'https://farm8.staticflickr.com/7735/18315501481_ffdbc6ffdc_b.jpg'
                },
                {
                    title:'untitulo',
                    url:'https://farm8.staticflickr.com/7758/17691287084_a8b326779c_b.jpg'
                },
                {
                    title:'untitulo',
                    url:'https://farm1.staticflickr.com/368/18287886786_5d05cc4c6d_b.jpg'
                }
            ];
        }
    ]);
}(angular));