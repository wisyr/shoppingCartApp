(function () {

    var app = angular.module('services', []);

    app.factory('productLoader', ['$http', '$log', function ($http, $log) {
        return function(callback) {
            callback = callback || function(){};
            $http.get('shopItems.json')
                .success(callback)
                .error(function (data, status) {
                $log.error('Error ' + status + ' unable to download the product list.');
            });
        };
    }]);

})();

// (function () {
//
//     var app = angular.module('services', []);
//
//     app.factory('productLoader', ['$http', '$log', function ($http, $log) {
//         return function() {
//             $http.get('shopItems.json')
//                 .success(function (data, status, headers, config) {
//
//                     $scope.shopOffer = data;
//                     $log.info('Product list loaded from the server.');
//
//                 }).error(function (data, status, headers, config) {
//
//                 $log.error('Error ' + status + ' unable to download the product list.');
//
//             });
//         };
//     }]);
//
// })();
