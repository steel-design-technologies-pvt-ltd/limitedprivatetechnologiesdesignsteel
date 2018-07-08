(function () {
    var appModule = angular.module('appModule');
    appModule.controller('archDesignRequestController', ['$scope', 'viewOrderService', function ($scope, viewOrderService) {
        viewOrderService.getArchDesignOrderDetails().then(function (response) {
            console.log(response);
            $scope.archDesignOrders = response.data;
        }, function (error) {
            console.log('error while fetching order details');
        });

        $scope.deleteOrder = function (orderToDelete) {
            console.log(orderToDelete);
            viewOrderService.deleteAnOrder(orderToDelete).then(function (response) {
                console.log('order deleted successfully');
            }, function (error) {
                console.log('error while deleting order');
            });
        }
    }]);
})();