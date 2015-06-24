(function (angular) {
    'use strict';

    angular.module('wPage').controller('ux', [
        '$scope',
        function ($scope) {
            $scope.imageList = [
                {
                    title:'pareja',
                    url:'https://farm8.staticflickr.com/7757/18128873879_9a80978007_b.jpg'
                },
                {
                    title:'piesbailan',
                    url:'https://farm8.staticflickr.com/7762/18288642756_264b71c2bd_b.jpg'
                },
                {
                    title:'dedos',
                    url:'https://farm9.staticflickr.com/8848/17694442323_9ba326b802_b.jpg'
                },
                {
                    title:'mano',
                    url:'https://farm1.staticflickr.com/522/18311150902_7d160f21d4_b.jpg'
                },
                {
                    title:'pareja',
                    url:'https://farm1.staticflickr.com/478/17692443404_500906797b_b.jpg'
                },
                {
                    title:'pie',
                    url:'https://farm8.staticflickr.com/7785/18128861299_7e80cb8224_b.jpg'
                },
                {
                    title:'nikita',
                    url:'https://farm1.staticflickr.com/350/18316490761_6d3344403e_o.png'
                },
                {
                    title:'ojo cemento',
                    url:'https://farm9.staticflickr.com/8874/18315061855_10c40db939_o.png'
                }
            ];
        }
    ]);
}(angular));

