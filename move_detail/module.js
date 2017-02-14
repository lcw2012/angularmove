(function (angular){
    //详情
    angular.module('moviecat.details',['ngRoute'])
        .config(['$routeProvider',function($routeProvider){
            $routeProvider.when('/details/:id?',{
                templateUrl:'./move_detail/view.html',
                controller:'DetailController'
            })
        }])
        .controller('DetailController',['$scope','$routeParams','An_JSONP',function($scope,$routeParams,An_JSONP){
            var id=$routeParams.id;
            // console.log(id);
            $scope.isShow=false;
            $scope.isdonghua=true;
            An_JSONP.jsonp('https://api.douban.com/v2/movie/subject/'+id,{},function(data){
                 $scope.isShow=true;
                $scope.isdonghua=false;
                console.log(data);
                $scope.t=data;
                $scope.$apply();
            })
        }]);
})(angular)
