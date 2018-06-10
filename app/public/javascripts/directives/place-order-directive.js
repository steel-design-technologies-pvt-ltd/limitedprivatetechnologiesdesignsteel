(function(){
    var appModule = angular.module('appModule');
    appModule.directive('placeOrder',[function(){
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'views/websiteViews/place-order.html',
            controller: 'placeOrderController',
            link: function (scope, element, attr) {
            }
        };
    }]);
})();