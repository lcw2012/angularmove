(function (angular) {
    angular.module('moviecat.move_list', ['ngRoute'])
        .config(['$routeProvider',function($routeProvider) {
            $routeProvider.when('/:t/:page?', {
                templateUrl: './move_list/view.html',
                controller: 'InTheatersController'
            })
        }])
        .controller('InTheatersController',['$scope','$http','$routeParams','$route','An_JSONP',function ($scope,$http,$routeParams,$route,An_JSONP) {
            $scope.isShow=true;
            //一页显示数据
            $scope.pageSize=5;
            // console.log($routeParams.page);
            //路由参数显示第几页
            $scope.curPage=$routeParams.page || 1 ;
            //起始值
            const movieStart=($scope.curPage-1)*$scope.pageSize;
            An_JSONP.jsonp('https://api.douban.com/v2/movie/'+$routeParams.t,{
                start:movieStart,count:$scope.pageSize,q:$routeParams.q
            },function (data) {
                console.log(data);
                $scope.movie=data;
                // 计算总页数
                $scope.totalPages = Math.ceil(data.total / $scope.pageSize);
                $scope.isShow=false;
                $scope.$apply();
            });
            //分页的实现
            $scope.goPages=function (current) {
                console.log(123);
                if(current<=0 || current>$scope.totalPages){
                    return;
                }
                $route.updateParams({page: current});
            }
        }])
})(angular)
