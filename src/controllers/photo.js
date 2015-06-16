(function (angular) {
    'use strict';

    angular.module('wPage').controller('photo', [
        '$scope',
        function ($scope) {
            $scope.imageList = [
                {
                    title:'untitulo1',
                    url:'https://farm8.staticflickr.com/7791/18287991486_e7680a93e7_b.jpg'
                },
                {
                    title:'untitulo2',
                    url:'https://farm8.staticflickr.com/7735/18315501481_ffdbc6ffdc_b.jpg'
                },
                {
                    title:'untitulo3',
                    url:'https://farm8.staticflickr.com/7758/17691287084_a8b326779c_b.jpg'
                },
                {
                    title:'untitulo4',
                    url:'https://farm8.staticflickr.com/7730/18310186752_2cb8185903_b.jpg'
                },
                {
                    title:'untitulo5',
                    url:'https://farm1.staticflickr.com/539/18310507542_14bca46317_b.jpg'
                },
                {
                    title:'untitulo6',
                    url:'https://farm8.staticflickr.com/7730/18310528802_b0c5f6ed1a_b.jpg'
                },
                {
                    title:'untitulo7',
                    url:'https://farm8.staticflickr.com/7735/18127705299_814450fa50_b.jpg'
                },
                {
                    title:'untitulo8',
                    url:'https://farm8.staticflickr.com/7758/17691287084_a8b326779c_b.jpg'
                },
                {
                    title:'untitulo9',
                    url:'https://farm9.staticflickr.com/8851/18126161800_4825f78a82_b.jpg'
                },
                {
                    title:'untitulo10',
                    url:'https://farm9.staticflickr.com/8864/18287467546_772f83a10f_b.jpg'
                },
                {
                    title:'untitulo11',
                    url:'https://farm1.staticflickr.com/522/18315322201_82c961240f_b.jpg'
                },
                {
                    title:'untitulo12',
                    url:'https://farm1.staticflickr.com/368/18287886786_5d05cc4c6d_b.jpg'
                }
            ];
        }
    ]);
}(angular));

