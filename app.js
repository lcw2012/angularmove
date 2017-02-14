(function (angular) {
        angular.module('moviecat',[
            'moviecat.home',
            'moviecat.details',
            'moviecat.move_list',
            'moviecat.autoActive',
            'moviecat.jsonp'
        ])
            .controller('mainController',['$scope','$location',function ($scope,$location) {
                $scope.query="";
                $scope.search=function () {
                    $location.url('/search?q='+$scope.query)
                }
            }])
})(angular)