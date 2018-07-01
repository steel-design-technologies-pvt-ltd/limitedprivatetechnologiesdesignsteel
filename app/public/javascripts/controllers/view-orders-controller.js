(function () {
    var appModule = angular.module('appModule');
    appModule.controller('viewOrdersController', ['$scope', 'viewOrderService', function ($scope, viewOrderService) {
        viewOrderService.getOrderDetails().then(function (response) {
            console.log(response);
            $scope.orders = response.data;
        }, function (error) {
            console.log('error while fetching order details');
        });

        $scope.deleteOrder = function (orderToDelete) {
            console.log(orderToDelete);
            viewOrderService.deleteAnOrder(orderToDelete).then(function (response) {
                viewOrderService.getOrderDetails();
            }, function (error) {
                console.log('error while deleting order');
            });
        }
    }]);
})();