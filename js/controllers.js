(function(){

    var app = angular.module('controllers', ['services']);

    app.controller('MainController', ['$scope', 'productLoader', function ($scope, productLoader) {

        $scope.shopOffer = [];

        productLoader(function(data) {
            $scope.shopOffer = data;
        });

        $scope.addToShoppingList = function (product) {
            var index = $scope.shopOffer.indexOf(product);
            var itemToAdd = $scope.shopOffer[index];
            itemToAdd.quantity = 1;
            $scope.itemsToBuy.push(itemToAdd);
            $scope.shopOffer.splice(index, 1);
        };

        $scope.removeFromCart = function (id) {
            $scope.shopOffer.push($scope.itemsToBuy[id]);
            $scope.itemsToBuy.splice(id, 1);
        };

        $scope.itemsToBuy = [];

        $scope.getTotal = function () {
            var total = 0;
            if ($scope.itemsToBuy.length > 0) {
                for (var i = 0; i < $scope.itemsToBuy.length; i++) {
                    var product = $scope.itemsToBuy[i];
                    total += (product.price * product.quantity);
                }
            }
            return '$' + total.toFixed(2);
        };

        $scope.$watch('itemsToBuy', function () {
            $scope.totalPrice = $scope.getTotal();
        }, true);

        $scope.checkLengthOfShoppingList = function () {
            return $scope.itemsToBuy.length;
        };

        $scope.clearCart = function () {
            for (var i = 0; i < $scope.itemsToBuy.length; i++) {
                $scope.shopOffer.push($scope.itemsToBuy[i]);
            }
            $scope.itemsToBuy = [];
        };

        $scope.confirmOrder = function () {
            window.alert("Your order is accepted.");
        };

        $scope.addQuantity = function (id) {
            if ($scope.itemsToBuy[id].quantity < 15) {
                $scope.itemsToBuy[id].quantity++;
            }
        };

        $scope.substractQuantity = function (id) {
            if ($scope.itemsToBuy[id].quantity > 0) {
                $scope.itemsToBuy[id].quantity--;
            }
        };

    }]);

})();
