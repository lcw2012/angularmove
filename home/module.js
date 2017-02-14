(function (angular) {
    // 首页模块
    angular.module('moviecat.home', ['ngRoute'])
        .config(['$routeProvider',function($routeProvider) {
            $routeProvider.when('/home_page', {
                templateUrl: './home/view.html'
            })
                .otherwise({
                    redirectTo:'/home_page'
                })
        }]);
})(angular)