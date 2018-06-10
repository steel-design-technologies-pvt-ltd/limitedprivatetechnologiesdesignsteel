(function(){
    var appModule = angular.module('appModule');
    appModule.controller('placeOrderController',['$scope','placeOrderService', 'growl', 'errorConstants', '$location',function($scope, placeOrderService, growl, errorConstants, $location){
        
        $scope.getUserDetails = function(){
            if($scope.userdetail.contact.length!=10 || $scope.userdetail.name.length<3){
                growl.error('The form filled is not valid', {'title': errorConstants.TITLE});
                return null;
            }
            console.log($scope.userdetail);
            placeOrderService.setUserDetail($scope.userdetail);
            placeOrderService.saveUserDetails($scope.userdetail).then(function (response) {
                console.log(response);
                setTimeout(function (){
                    placeOrderService.updateProductAvailability($scope.userdetail).then(function (response) {
                        $scope.userdetail = null;
                        console.log($location);
                        $location.path('/home/thanks.html');                    
                    }, function (error) {
                        growl.error(errorConstants.USER_DETAIL_SAVED.ERROR.DESCRIPTION, {'title': errorConstants.TITLE});
                    });
                },500);
            }, function (error) {
                growl.error(errorConstants.ORDER_PLACED.ERROR.DESCRIPTION, {'title': errorConstants.TITLE});
            });
        }
    }]);
})();