(function (angular) {
    // 创建一个服务，用来发送jsonp请求
    // 疯转jsonp来请求跨域数据
    angular.module('moviecat.jsonp', [])
        .service('An_JSONP', ['$window', function($window){
            var doc = $window.document;
            // 发送JSONP请求，获取数据
            this.jsonp = function(url, params, callback) {
                url += '?';
                for(var k in params) {
                    url += k + '=' + params[k] + '&';
                }
                var callbackName = 't_jsonp_' + (new Date() - 0);
                url += 'callback=' + callbackName;
                var script = doc.createElement('script');
                script.src = url;
                doc.body.appendChild(script);
                // JSONP调用的是这个函数
                $window[callbackName] = function(data) {
                    callback(data);
                };
            };
        }])
})(angular)