(function (angular) {
    'use strict';

    angular.module('wPage').controller('web', [
        '$scope',
        function ($scope) {
            $scope.imageList = [
                {
                    title:'markers',
                    url:'https://farm1.staticflickr.com/482/18315079425_16596e36bd_b.jpg'
                },
                {
                    title:'marker',
                    url:'https://farm1.staticflickr.com/550/18311164352_3b67ed12ce_o.png'
                },
                {
                    title:'icon',
                    url:'https://farm9.staticflickr.com/8806/18127262808_5f59dc190b_z.jpg'
                },
                {
                    title:'icon',
                    url:'https://farm9.staticflickr.com/8881/18127238818_09cc47f702_z.jpg'
                }
            ];
        }
    ]);
}(angular));

